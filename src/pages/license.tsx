import { NextPage } from 'next';
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Layout } from '@/components/Layout/Layout';
import { Link } from '@/components/Link/Link';
import type { ExtraPageProps } from '@/interfaces/page.model';

const LicensePage: NextPage<ExtraPageProps> = ({ menu }) => (
  <Layout menu={menu} title="License">
    <Card>
      <CardContent>
        <Typography align="center" variant="h1">
          Licenses and Resources
        </Typography>
        <Typography paragraph>
          The <em>Wiki</em> is unofficial <em>Magic: the Gathering</em> fan
          content permitted under the{' '}
          <Link
            external
            href="https://company.wizards.com/en/legal/fancontentpolicy"
          >
            Fan Content Policy
          </Link>
          . Portions of the materials used such as mana symbols and game
          mechanics are property of Wizards of the Coast. Card arts are made
          available from{' '}
          <Link external href="https://scryfall.com/docs/api">
            Scryfall&apos;s API
          </Link>{' '}
          and are copyright Wizard of the Coast or their respective artist for
          older sets.
        </Typography>
        <Typography paragraph>
          All original code for the <em>Wiki</em> is available under the terms
          of the{' '}
          <Link
            external
            href="https://github.com/angrybacon/doomsday-wiki/blob/master/LICENSE.org"
          >
            MIT
          </Link>{' '}
          license. For more information about the underlying code, refer to the{' '}
          <Link external href="https://github.com/angrybacon/doomsday-wiki">
            GitHub repository
          </Link>
          .
        </Typography>
        <Typography paragraph>
          All original content such as articles and chapters is available under
          the terms of the{' '}
          <Link
            external
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode"
          >
            Attribution-NonCommercial-NoDerivatives 4.0 International
          </Link>{' '}
          license. Its raw form can be found within the repository under the{' '}
          <code>markdown/</code> directory.
        </Typography>
      </CardContent>
    </Card>
  </Layout>
);

export default LicensePage;
