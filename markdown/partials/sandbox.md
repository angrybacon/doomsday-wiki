<!-- markdownlint-disable first-line-heading -->

## Table of Contents

## Preamble

Rather than having to maintain any additional guidelines, refer to the following
document in order to see how Markdown is rendered through the Wiki. It relies
directly on components implemented within the Wiki so that the preview is as
faithful as can be.

In addition to `markdownlint` and `prettier` enforcing some basic rules, here
are a few more conventions:

- Fill your paragraphs to 80 columns
- If your title oppose to the above rule, think of a better heading for your
  document. In addition to annoy users with terminal-based clients, it also
  might not look that good either on the Wiki itself
- Heading levels start at 2 in order to account for the page title
- Don't use unicode quote characters eg. `‘’` and `“”`. They might not render
  properly for everyone so ASCII quotes should be preferred
- A colon right in front of a word will be interpreted as a Markdown /directive/
  so make sure you have a space right after `:` when it is used as punctuation
- A dot right after a number character ie. when you end your sentence with a
  digit, will sometimes render as a numbered list item. To avoid this behavior,
  escape the dot with a backslash: `Brainstorm is good, you might want all 4\.`
- Depending on one's Markdown client, a dot at the end of a link can be
  considered part of said link eg. when you end your sentences with a link.
  Avoid bare links, wrap them with angled brackets `<` and `>`

## Accordions

### Simple

```md
:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::
```

:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

### Multiple

Consecutive accordions stack against one another.

```md
:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.
:::

:::accordion[Click to expand]
Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::
```

:::accordion[Click to expand]
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.
:::

:::accordion[Click to expand]
Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

### Nested Directives

```md
::::accordion[Click to expand]
:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

:::row
DD | WTH
DD | PRM | 61058
DD | MP2
DD | A25
DD | PLST
DD | SLD | 1115
:::
::::
```

::::accordion[Click to expand]
:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

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

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```
````

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

## Decklists

Coming soon &trade;

## Footnotes

Coming soon &trade;

## Frontmatter

The header of a Markdown document can be referred to as the _frontmatter_. It is
used to hold a body of YAML metadata for the current document without polluting
its actual content.

### Chapters

- `authors`: Comma-separated list of authors that should be credited for the
  current chapter. Currently unused
- `banner`: (mandatory) Configure a benner for the page. Scryfall syntax is
  supported
- `order`: A index number to specify the order of your chapter under its
  collapsible group within the sidebar. By default chapters are alpha-sorted
  using their slug ie. their path
- `title`: (mandatory) A string to serve as page title. Wrap it with double
  quotes to allow special characters such as `:` and `'`

### Articles

Article documents don't have an `order` property but support other fields. Use
existing articles for inspiration.

- `authors`: Comma-separated list of authors that should be credited for the
  current chapter
- `banner`: (mandatory) Set a banner for the article to display in the homepage
  as well as at the top of the article in its own dedicated page. Scryfall
  syntax is supported
- `kind`: (mandatory) A kind symbol. Available values can be found in the keys
  at [Kind.ts][constants:kind]
- `title`: (mandatory) The string used for your article page title. Note that
  this does not have any effect on the URL for your article
- `tags`: An array of tag symbols. Available values can be found in the keys at
  [Tag.ts][constants:tag]. Tags are used to dictate which card abbreviations
  should be documented in the sidebar

[constants:kind]: https://github.com/angrybacon/doomsday-wiki/blob/master/src/tools/markdown/constants/Kind.ts
[constants:tag]: https://github.com/angrybacon/doomsday-wiki/blob/master/src/tools/markdown/constants/Tag.ts

## Images

Prefer smaller images in resolution. Most users don't need a 4K screenshot of
the game. Make them as tall as you actually need but not taller since those
typically prevent users to read a page comfortably especially on mobile devices.

Both the accessible text (between square brackets) and the title (between single
quotes) are mandatory for a proper accessibility of your images within the page.

```md
![A large placeholder image](https://www.placehold.co/1600x320 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x160 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x80 'Low resolution')
```

![A large placeholder image](https://www.placehold.co/1600x320 'High resolution')

![A medium placeholder image](https://www.placehold.co/800x160 'Medium resolution')

![A small placeholder image](https://www.placehold.co/400x80 'Low resolution')

## Lists

### Ordered Lists

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

### Unordered Lists

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
:spoiler[efficitur pharetra] quam.
```

Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue `sapien` turpis quis purus.

Suspendisse :card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.

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

## Scryfall

Coming soon &trade;

## SoundCloud

```md
::soundcloud{url=ddftwiki/a-history-of-doomsday}
```

::soundcloud{url=ddftwiki/a-history-of-doomsday}

## Spoilers

Inline verbatim content is not supported within spoiler blocks.

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

### Default Alignement

```md
| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  | Quisque commodo urna      |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
```

| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  | Quisque commodo urna      |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |

### Custom Alignement

<!-- prettier-ignore-start -->

```md
| One                         | Two              | Three                     |
| :-------------------------- | :--------------: | ------------------------: |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  | Quisque commodo urna      |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
```

<!-- prettier-ignore-end -->

| One                         |       Two        |                     Three |
| :-------------------------- | :--------------: | ------------------------: |
| Ultrices a _faucibus_ eget  | Ultricies lectus | Curabitur lobortis dictum |
| Quisque **libero** elit     | Aliquet sem vel  |      Quisque commodo urna |
| Morbi consectetur non velit |  Tempor a massa  |       Orci varius natoque |
| Sed pulvinar sapien in odio |  Cras nec nisl   |    Nascetur ridiculus mus |

## Twitter

```md
::tweet{id=1574576125535129600}
```

::tweet{id=1574576125535129600}

## YouTube

```md
::youtube{id=3LLIFHv5kbo}
```

::youtube{id=3LLIFHv5kbo}
