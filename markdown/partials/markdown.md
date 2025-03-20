<!-- markdownlint-disable first-line-heading -->

## Preamble

Rather than having to maintain any additional guidelines, refer to the following
sections in order to see how Markdown is rendered through the Wiki. It relies
directly on components implemented within the Wiki so that the preview is as
faithful as can be.

In addition to `markdownlint` and `prettier` enforcing some basic rules, here
are a few more conventions for Markdown contributions:

- Fill your paragraphs to 80 columns
- If your title oppose to the above rule, think of a better heading for your
  document. In addition to annoy users with terminal-based clients, it also
  might not look that good either on the Wiki itself
- Heading levels start at 2 in order to account for the page title
- Don't use unicode quote characters eg. `‘’` and `“”`. They might not render
  properly for everyone so ASCII quotes should be preferred
- A colon right in front of a word will be interpreted as a Markdown directive
  so make sure you have a space right after `:` when it is used as punctuation
- A dot right after a number character ie. when you end your sentence with a
  digit, will sometimes render as a numbered list item. To avoid this behavior,
  escape the dot with a backslash: `Brainstorm is good, you might want all 4\.`
- Depending on one's Markdown client, a dot at the end of a link can be
  considered part of said link eg. when you end your sentences with a link.
  Avoid bare links inside of prose, wrap them with angled brackets `<` and `>`

## Accordions

For decklist accordions, see [#decklists](#decklists).

### Simple

```md
:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
:::
```

:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
:::

### Multiple

Consecutive accordions stack against one another.

```md
:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci.
:::

:::accordion[Click to expand]
Et congue `sapien` turpis quis purus.
:::

:::accordion[Click to expand]
Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
:::
```

:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci.
:::

:::accordion[Click to expand]
Et congue `sapien` turpis quis purus.
:::

:::accordion[Click to expand]
Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
:::

### Nested Directives

````md
::::accordion[Click to expand]

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

:::row
DD | WTH
DD | PRM | 61058
DD | MP2
DD | A25
DD | PLST
DD | SLD | 1115
:::
::::
````

::::accordion[Click to expand]

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

:::row
DD | WTH
DD | PRM | 61058
DD | MP2
DD | A25
DD | PLST
DD | SLD | 1115
:::
::::

## Code

````text
```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```
````

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

## Decklists

```md
::decklist{path=meandeck.budget}
```

::decklist{path=meandeck.budget}

```md
::decklist{path=2023/07/turbo.fuz65}
::decklist{path=ddeft}
::decklist{path=ddft}
::decklist{path=meandeck.ub}
```

::decklist{path=2023/07/turbo.fuz65}
::decklist{path=ddeft}
::decklist{path=ddft}
::decklist{path=meandeck.ub}

## Footnotes

Coming soon &trade;

## Frontmatter

The header of a Markdown document can be referred to as the _frontmatter_. It is
used to hold a body of YAML metadata for the current document without polluting
its actual content.

| Field     | Articles       | Chapters       | Notes                                                                                                           |
| --------- | -------------- | -------------- | --------------------------------------------------------------------------------------------------------------- |
| `authors` | Yes            | Yes            | Comma-separated list of authors that should be credited                                                         |
| `banner`  | Yes (required) | Yes (required) | Configure a banner for the page. Scryfall syntax is supported                                                   |
| `kind`    | Yes (required) |                | Available values at [constants.ts][constants.ts]                                                                |
| `tags`    | Yes            |                | Available values at [constants.ts][constants.ts]. Used to pick which abbreviations are available in the sidebar |
| `title`   | Yes (required) | Yes (required) | Wrap with double quotes if using special characters such as `:` and `'`                                         |

[constants.ts]: https://github.com/angrybacon/doomsday-wiki/blob/master/tools/markdown/constants.ts

## Images

Prefer smaller images in resolution. Most users don't need a 4K screenshot of
the game. Make them as tall as you actually need but know that they will be
constrained in a hardcoded aspect ratio in order to prevent [CLS issues][cls]
for all users. See the [code][image.tsx] for reference.

Both the accessible text (between square brackets) and the title (between single
quotes) are mandatory for a proper accessibility of your images within the page.

[cls]: https://web.dev/articles/cls
[image.tsx]: https://github.com/angrybacon/doomsday-wiki/blob/master/components/Markdown/renderers/Image.tsx

```md
![A large placeholder image](https://www.placehold.co/1600x800 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x400 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x200 'Low resolution')
```

![A large placeholder image](https://www.placehold.co/1600x800 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x400 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x200 'Low resolution')

## Links

Coming soon &trade;

## Lists

```md
1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et `ipsum` consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est
```

1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et `ipsum` consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est

```md
- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et `ipsum` consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est
```

- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et `ipsum` consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est

## Mana

You can inline mana symbols _almost_ everywhere.

```md
{W} {U} {B} {R} {G} {WP} {UP} {BP} {RP} {GP} {2W} {2U} {2B} {2R} {2G}

{WU} {UB} {BR} {RG} {GW} {WB} {UR} {BG} {RW} {GU}

{0} {1} {2} &hellip; {20} {S} {C} {X} {Y} {Z}
```

{W} {U} {B} {R} {G} {WP} {UP} {BP} {RP} {GP} {2W} {2U} {2B} {2R} {2G}

{WU} {UB} {BR} {RG} {GW} {WB} {UR} {BG} {RW} {GU}

{0} {1} {2} &hellip; {20} {S} {C} {X} {Y} {Z}

When used collectively, for instance to indicate the color identity of an
archetype, use the same order as found on the back of a _Magic: the Gathering_
card. This makes searching for guilds and clans much easier later on. As an
exception to this rule and when referring to Doomsday colors, start with blue
and black as it makes it easier for the eyes to parse quickly the differences
from one wedge to the next.

Currently only the mana costs are available but loyalty and other color
indicators may come soon &trade;.

## Paragraphs

```md
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
```

Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.

## Quotes

```md
> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit rutrum orci, et congue `sapien` turpis quis purus.
>
> Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
> :spoiler[efficitur pharetra] quam.
```

> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit rutrum orci, et congue `sapien` turpis quis purus.
>
> Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
> :spoiler[efficitur pharetra] quam.

## Rows

### Centered

```md
:::row
DD | WTH
DD | PRM | 61058
DD | MP2
DD | A25
DD | PLST
DD | SLD | 1115
:::
```

:::row
DD | WTH
DD | PRM | 61058
DD | MP2
DD | A25
DD | PLST
DD | SLD | 1115
:::

```md
:::row
Plains | UNH
Island | UNH
Swamp | UNH
Mountain | UNH
Forest | UNH
:::
```

:::row
Plains | UNH
Island | UNH
Swamp | UNH
Mountain | UNH
Forest | UNH
:::

```md
:::row
Flooded Strand
Misty Rainforest
Polluted Delta
Scalding Tarn
:::
```

:::row
Flooded Strand
Misty Rainforest
Polluted Delta
Scalding Tarn
:::

```md
:::row
TW
IU
AoI
:::
```

:::row
TW
IU
AoI
:::

```md
:::row
IC
Cruel Bargain
:::
```

:::row
IC
Cruel Bargain
:::

```md
:::row
BS
:::
```

:::row
BS
:::

### Pile

Use the `PILE` variant in order to highlight a Doomsday pile.

```md
:::row{variant=PILE}
IU
LP
LP
TO
TO
:::
```

:::row{variant=PILE}
IU
LP
LP
TO
TO
:::

Incomplete piles are always left-aligned.

```md
:::row{variant=PILE}
LP
LP
TO
TO
:::
```

:::row{variant=PILE}
LP
LP
TO
TO
:::

## Scryfall

In some contexts, you can refer to card names within Markdown. To ease the
writing process and reduce typos, a number of shorthands for card names can be
found [here][cards.ts].

> For supported acronyms, the case matters!.

For parts where you query card imagery, you can optionally provide a specific
set using the 3-letters set code. By default, first print is preferred except
for a few [exceptions][sets.ts]. To identify the right code for your set,
inspect the links at <https://scryfall.com/sets>.

> Be warned however that some promotional prints may have an earlier timestamp
> than the _regular_ printing of a card.

[cards.ts]: https://github.com/angrybacon/doomsday-wiki/blob/master/tools/game/constants/Cards.ts
[sets.ts]: https://github.com/angrybacon/doomsday-wiki/blob/master/tools/game/constants/Sets.ts

### Specifying Prints

In some specific cases, you will want to specify a collector number, this can be
achieved with a suffix. This is especially useful for sets with multiple
printings of the same card.

```md
:::row
DD
DD | SLD
Subtlety
Subtlety | MH2
Duress | STA | 92
:::
```

:::row
DD
DD | SLD
Subtlety
Subtlety | MH2
Duress | STA | 92
:::

### Double-Face Cards

```md
:::row
Tamiyo, Inquisitive Student
Delver of Secrets
Extus, Oriq Overlord
Dennick, Pious Apprentice
Invasion of Ikoria
:::
```

:::row
Tamiyo, Inquisitive Student
Delver of Secrets
Silundi Vision
Malevolent Hermit
Invasion of Ikoria
:::

### Split Cards

Split cards are also supported. You don't need to provide both names in order to
match the card, except for _Who // What // When // Where // Why_, for some
reason.

> Split cards currently render a button to flip them like DFC. This should be
> fixed sometimes soon &trade;

```md
:::row
Fire
Wear
Walk-In-Closet
Consign
Who // What // When // Where // Why
:::
```

:::row
Fire
Wear
Walk-In-Closet
Consign
Who // What // When // Where // Why
:::

## SoundCloud

```md
::soundcloud{url=ddftwiki/a-history-of-doomsday}
```

::soundcloud{url=ddftwiki/a-history-of-doomsday}

## Spoilers

Inline verbatim content and links are not supported within spoiler blocks.

```md
:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::
```

:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

## Tables

The following items are not supported within tables:

- Merged cells
- Headless tables
- Multiline text within rows

### Default Alignement

<!-- markdownlint-disable line-length -->

```md
| One                              | Two              | Three                     |
| -------------------------------- | ---------------- | ------------------------- |
| Ultrices a _faucibus_ eget       | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit          | Aliquet sem vel  | Quisque commodo urna      |
| Morbi :card[DA] non velit        | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar :spoiler[sapien] in | Cras nec nisl    | Nascetur ridiculus mus    |
```

<!-- markdownlint-restore -->

| One                              | Two              | Three                     |
| -------------------------------- | ---------------- | ------------------------- |
| Ultrices a _faucibus_ eget       | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit          | Aliquet sem vel  | Quisque commodo urna      |
| Morbi :card[DA] non velit        | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar :spoiler[sapien] in | Cras nec nisl    | Nascetur ridiculus mus    |

### Custom Alignement

<!-- markdownlint-disable line-length -->
<!-- prettier-ignore-start -->

```md
| One                              | Two              | Three                     |
| :------------------------------- | :--------------: | ------------------------: |
| Ultrices a _faucibus_ eget       | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit          | Aliquet sem vel  | Quisque commodo urna      |
| Morbi :card[DA] non velit        | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar :spoiler[sapien] in | Cras nec nisl    | Nascetur ridiculus mus    |
```

<!-- prettier-ignore-end -->
<!-- markdownlint-restore -->

| One                              |       Two        |                     Three |
| :------------------------------- | :--------------: | ------------------------: |
| Ultrices a _faucibus_ eget       | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit          | Aliquet sem vel  |      Quisque commodo urna |
| Morbi :card[DA] non velit        |  Tempor a massa  |       Orci varius natoque |
| Sed pulvinar :spoiler[sapien] in |  Cras nec nisl   |    Nascetur ridiculus mus |

## Twitter

Deprecated

## YouTube

```md
::youtube{id=3LLIFHv5kbo}
```

::youtube{id=3LLIFHv5kbo}
