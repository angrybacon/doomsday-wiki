import { GetStaticProps, NextPage } from 'next';
import { useEffect, useState, type ChangeEvent } from 'react';
import {
  Box,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from '@mui/material';
import { Stack } from '@mui/system';
import { Layout } from '@/components/Layout/Layout';
import { phyrexian } from '@/fonts/fonts';
import { getMenu } from '@/tools/markdown/getMenu';
import type { MenuEntry } from '@/tools/markdown/types';

// NOTE Flavor text from "Dark Ritual" Urza's Saga
const DEFAULT_INPUT = `From void evolved Phyrexia.
Great Yawgmoth, Father of Machines, saw its perfection.
Thus the Grand Evolution began.`;

interface Props {
  menu: MenuEntry[];
}

const SandboxPage: NextPage<Props> = ({ menu }) => {
  const [input, setInput] = useState<string>(DEFAULT_INPUT);
  const [output, setOutput] = useState<{ id: number; text: string }[]>([]);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) =>
    setInput(target.value);

  useEffect(() => {
    const columns: string[] = input.trim().split(/[.\n]+/);
    const result = columns.reduce<{ id: number; text: string }[]>(
      (accumulator, column, id) => {
        const value = column.trim();
        if (!value.length) return accumulator;
        return [...accumulator, { id, text: value.replace(/ +/g, ',') }];
      },
      [],
    );
    setOutput(result);
  }, [input]);

  return (
    <Layout menu={menu} title="Sandbox">
      <Stack spacing={2}>
        <Card>
          <CardContent>
            <Typography>
              This page is not officially part of the Wiki and serves as
              repository for interactive content until a better location for it
              is found.
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Typography paragraph variant="h3">
              Phyrexian Remapper
            </Typography>
            <Typography paragraph>
              This is not a translator. This simply remaps latin characters with
              Phyrexian scripture but has no semantic accuracy and comes with no
              claim at being accurate nor official. See the license for credits.
            </Typography>
            <TextField
              fullWidth
              label="Text"
              maxRows={8}
              multiline
              onChange={onChange}
              value={input}
            />
          </CardContent>
          <Divider />
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'row-reverse',
              justifyContent: 'flex-end',
            }}
          >
            {output.length ? (
              output.map(
                (scripture) =>
                  scripture.text.length > 0 && (
                    <Box
                      className={phyrexian.className}
                      key={scripture.id}
                      sx={{
                        textOrientation: 'upright',
                        writingMode: 'vertical-lr',
                      }}
                    >
                      |{scripture.text}.
                    </Box>
                  ),
              )
            ) : (
              <Typography color="text.secondary" sx={{ fontStyle: 'italic' }}>
                Type something to see the corresponding Phyrexian scripture.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Stack>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
  props: {
    menu: getMenu(),
  },
});

export default SandboxPage;
