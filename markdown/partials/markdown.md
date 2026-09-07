# Markdown Guidelines

:::warning{title="This page is not indexed"}
You're seeing a page that is not officially part of the Wiki. It is left
publicly available for simplicity and for ease of sharing. It is not being
indexed by default, it is simply a reference for contributors.
:::

Rather than having to maintain additional guidelines in different locations,
this page will attempt at documenting a timeless repository of contribution
guidelines for the Wiki. Refer to the following sections in order to see how
Markdown is rendered through the pages. This page implements the same components
and invokes the same code so what you see here is exactly how it renders within
the rest of the Wiki. In doubt, see the usage and follow existing conventions.

:::note{title="Additional conventions and guidelines"}
All Markdown files are checked against both `markdownlint` and `prettier` at
build time enforcing some basic rules, but here are a few more conventions for
Markdown contributions:

- Fill your paragraphs to 80 columns
- If your title opposes to the above rule, think of a better heading for your
  document. In addition to annoy users with terminal-based clients, it also
  might not look that good either on the Wiki
- A colon right in front of a word will be interpreted as a Markdown directive
  so make sure you have a space right after `:` when it is used as punctuation
- Depending on one's Markdown client, a dot at the end of a link can be
  considered part of said link (e.g. when you end your sentences with a link).
  Avoid bare links inside of prose, wrap them with angled brackets `<` and `>`
- Heading levels start at 2 in order to account for the page title

:::

The below components wrapped with colons are referred to as
[directives][directives] in Markdown parlance. In the case of container
directives, they can be wrapped together by adding an additional colon character
for each extra level.

## Accordions

Consecutive accordions stack against one another. For decklist accordions, see
[#decklists](#decklists).

```md
:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
:::

::::accordion[Click to expand]
:::row
Doomsday | WTH
Doomsday | 6ED
Doomsday | PRM | 61058
Doomsday | MP2
Doomsday | A25
:::
:::row
Doomsday | PLST
Doomsday | SLD | 1115
Doomsday | MB2
Doomsday | MSC
Doomsday | SLZ | 281
:::
::::
```

:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur] pharetra quam.
:::

::::accordion[Click to expand]
:::row
Doomsday | WTH
Doomsday | 6ED
Doomsday | PRM | 61058
Doomsday | MP2
Doomsday | A25
:::
:::row
Doomsday | PLST
Doomsday | SLD | 1115
Doomsday | MB2
Doomsday | MSC
Doomsday | SLZ | 281
:::
::::

## Code

````text
```ts filename="toDirective.ts"
import { MANA_RE } from '~/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```
````

```ts filename="toDirective.ts"
import { MANA_RE } from '~/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

## Decklists

You can add decklists within your Markdown content, they will be rendered as a
collapsible block. Decklist files are located under `decklists/` and should be
dated using a `[year]/[month]/[day]/file.txt` (or `[year]/[month]/file.txt` when
you don't have the exact date) convention if able. Follow the existing structure
as an example. As an exception, decklist files found directly under `decklists/`
are used in non-dated content like chapters to ease maintenance.

```md
::decklist{url=meandeck.budget}
```

::decklist{url=meandeck.budget}

```md
::decklist{url=2023/07/turbo.fuz65}
::decklist{url=ddeft}
::decklist{url=ddft}
::decklist{url=meandeck.ub}
```

::decklist{url=2023/07/turbo.fuz65}
::decklist{url=ddeft}
::decklist{url=ddft}
::decklist{url=meandeck.ub}

## Frontmatter

The header of a Markdown document can be referred to as the _frontmatter_. It is
used to hold a body of YAML metadata for the current document without polluting
its actual content.

| Field     | Type     | Notes                                                                                                  |
| --------- | -------- | ------------------------------------------------------------------------------------------------------ |
| `authors` | String   | Comma-separated list of authors that should be credited                                                |
| `banner`  | String   | Configure a banner for the page. Support [Scryfall syntax][scryfall]                                   |
| `kind`    | String   | Available values at [schemas.ts][schemas.ts]                                                           |
| `tags`    | Sequence | Available values at [schemas.ts][schemas.ts]. Currently used to configure abbreviations in the sidebar |
| `title`   | String   | Wrap with double quotes if using special characters such as `:` and `'`                                |

## Images

Prefer smaller images in resolution. Most users don't need a 4K screenshot of
the game. Make them as tall as you actually need but know that they will be
constrained in a hardcoded aspect ratio in order to prevent [CLS issues][cls]
for all users. See the [code][image.tsx] for reference.

Both the accessible text (between square brackets) and the title (between single
quotes) are mandatory for proper accessibility of your images within the page.

:::note{title="Difference between accessible text and image title"}
The difference is subtle but important. Basically, the former should describe
the image for anyone not able to access the image, while the latter will give
additional context for anyone able to access the image.

Basically, the accessible text answers the "what is it?" and the image title
acts as legend for users who do see it.
:::

```md
![A large wide placeholder](https://www.placehold.co/1600x800 'Wide resolution')

![A medium square placeholder](https://www.placehold.co/800 'Square resolution')

![A small tall placeholder](https://www.placehold.co/200x400 'Tall resolution')
```

![A large wide placeholder](https://www.placehold.co/1600x800 'Wide resolution')

![A medium square placeholder](https://www.placehold.co/800 'Square resolution')

![A small tall placeholder](https://www.placehold.co/200x400 'Tall resolution')

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
{W} {U} {B} {R} {G} &nbsp; {WP} {UP} {BP} {RP} {GP}

{2W} {2U} {2B} {2R} {2G} &nbsp; {CW} {CU} {CB} {CR} {CG}

{WU} {UB} {BR} {RG} {GW} &nbsp; {WB} {UR} {BG} {RW} {GU}

{0} {1} {2} &hellip; {20} &nbsp; {S} {C} &nbsp; {X} {Y} {Z}
```

{W} {U} {B} {R} {G} &nbsp; {WP} {UP} {BP} {RP} {GP}

{2W} {2U} {2B} {2R} {2G} &nbsp; {CW} {CU} {CB} {CR} {CG}

{WU} {UB} {BR} {RG} {GW} &nbsp; {WB} {UR} {BG} {RW} {GU}

{0} {1} {2} &hellip; {20} &nbsp; {S} {C} &nbsp; {X} {Y} {Z}

When used collectively, for instance to indicate the color identity of an
archetype, use the same order as found on the back of a _Magic: the Gathering_
card. This makes searching for guilds and clans much easier later on. As an
exception to this rule and when referring to Doomsday colors, start with blue
then black as it makes it easier for the eyes to parse quickly the differences
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

## Scryfall

In some contexts, you can refer to cards by name within Markdown. To ease the
writing process and reduce the chances of mistyping, a number of shorthands for
common card names can be found maintained next to [the code][constants.ts].

### Inline Card Links

The inline `:card` directive expects exact card names and look for the first
printing of it.

```md
I hear :card[TO] and :card[Doomsday] go well together. But how about
:card[Tamiyo, Inquisitive Student] and :card[Bs]?
```

I hear :card[TO] and :card[Doomsday] go well together. But how about
:card[Tamiyo, Inquisitive Student] and :card[Bs]?

:::note{title="Hover preview"}
Inline card links have a preview on hover and double-faced cards are supported
with an inline CTA to flip the card manually.

For touch devices, the usual long-press should work just fine. YMMV
:::

### Rows of Cards

Row of cards are centered automatically and each card is secured under 25% of
the available width with a maximum hardcoded width. The card images do not wrap
automatically.

```md
:::row
Plains | UNH
Island | UNH
Swamp | UNH
Mountain | UNH
Forest | UNH
:::

:::row
Flooded Strand
Misty Rainforest
Polluted Delta
Scalding Tarn
:::

:::row
Bs
Pnd
Pre
:::
```

:::row
Plains | UNH
Island | UNH
Swamp | UNH
Mountain | UNH
Forest | UNH
:::

:::row
Flooded Strand
Misty Rainforest
Polluted Delta
Scalding Tarn
:::

:::row
Bs
Pnd
Pre
:::

### Doomsday Piles

Use the `PILE` variant in order to highlight a Doomsday pile.

```md
:::row{variant=PILE}
SW
SW
SW
SW
TO
:::
```

:::row{variant=PILE}
SW
SW
SW
SW
TO
:::

Partial piles are always left-aligned.

```md
:::row{variant=PILE}
SW
SW
SW
TO
:::
```

:::row{variant=PILE}
SW
SW
SW
TO
:::

### Specifying Prints

:::warning{title="First print policy"}
By default first print is preferred and we trust the excellent Scryfall for
that. But be warned however that some promotional prints may have an earlier
timestamp than the _regular_ printing of a card (e.g. Endurance).
:::

In some specific cases, you will want to specify a set or a collector number,
this can be achieved with a suffix. This is especially useful for sets with
multiple printings of the same card.

:::note{title="Identifying sets and collector numbers"}
To identify the right 3-letters code, or the specific collector number for your
printing preference, inspect the links at <https://scryfall.com/sets>.
:::

```md
:::row
Force of Will | 2XM | 340
Doomsday | SLD
Subtlety | MH2 | 309
Duress | STA | 92
:::
```

:::row
Force of Will | 2XM | 340
Doomsday | SLD
Subtlety | MH2 | 309
Duress | STA | 92
:::

### Double-Faced Cards

```md
:::row
Tamiyo, Inquisitive Student
Malevolent Hermit
Invasion of Ikoria
Ugin, Eye of the Storms | TDM | 382
:::
```

:::row
Tamiyo, Inquisitive Student
Malevolent Hermit
Invasion of Ikoria
Ugin, Eye of the Storms | TDM | 382
:::

### Split Cards

Split cards are also supported. Use either the full name, or the front face's
name.

```md
:::row
Fire // Ice
Consign
Emeritus of Woe
Who
:::
```

:::row
Fire // Ice
Consign
Emeritus of Woe
Who
:::

## SoundCloud

```md
::soundcloud{url=ddftwiki/a-history-of-doomsday}
```

::soundcloud{url=ddftwiki/a-history-of-doomsday}

## Spoilers

Inline verbatim content and links remain visible within spoiler blocks.

```md
:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
efficitur pharetra quam.
:::
```

:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
efficitur pharetra quam.
:::

Inline spoilers are also supported.

```md
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis :spoiler[quis purus].
```

Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis :spoiler[quis purus].

## Tables

The following items are not supported within tables:

- Merged cells
- Headless tables
- Multiline text within rows

### Default Alignment

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

### Custom Alignment

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

[cls]: https://web.dev/articles/cls
[constants.ts]: https://github.com/angrybacon/doomsday-wiki/blob/master/tools/rosetta/constants.ts
[directives]: https://talk.commonmark.org/t/generic-directives-plugins-syntax/444
[image.tsx]: https://github.com/angrybacon/doomsday-wiki/blob/master/components/Markdown/renderers/Image.tsx
[schemas.ts]: https://github.com/angrybacon/doomsday-wiki/blob/master/tools/markdown/schemas.ts
[scryfall]: #scryfall
