<!-- markdownlint-disable first-line-heading -->

## Table of Contents

## Typography

### Paragraphs

```md
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
:card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
```

Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
:card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.

### Quotes

```md
> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
> :card[Underground Sea] ex ligula, elementum elementum arcu eu,
> :spoiler[efficitur pharetra] quam.
```

> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
> :card[Underground Sea] ex ligula, elementum elementum arcu eu,
> :spoiler[efficitur pharetra] quam.

### Spoilers

```md
:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
:card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::
```

:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
:card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

### Lists

```md
- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et ipsum consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est
```

- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et ipsum consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est

```md
1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et ipsum consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est
```

1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et ipsum consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est

### Tables

```md
| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
| Quisque libero elit         | Aliquet sem vel  | Quisque commodo urna      |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |
```

| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
| Quisque libero elit         | Aliquet sem vel  | Quisque commodo urna      |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |

### Code Blocks

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

## Accordions

```md
::::accordion[From Markdown directly]

[...]

:::spoiler
[...]
:::

::::
```

::::accordion[From Markdown directly]

### Paragraphs

Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
:card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.

### Quotes

> Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
> tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
> libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
> :card[Underground Sea] ex ligula, elementum elementum arcu eu,
> :spoiler[efficitur pharetra] quam.

### Spoilers

:::spoiler
Lorem ipsum _dolor_ sit amet, consectetur **adipiscing** elit. Ut sed
tincidunter diam, sed tempor neque. Cras pulvinar, nisi at fermentum congue,
libero elit rutrum orci, et congue sapien turpis quis purus. Suspendisse
:card[Underground Sea] ex ligula, elementum elementum arcu eu,
:spoiler[efficitur pharetra] quam.
:::

### Lists

- Aliquam at _pretium_ eros, vitae congue orci
- Fusce **bibendum** ac mauris eu malesuada
  - Aliquam aliquet sed tortor ac laoreet
  - Aenean vel nulla et ipsum consequat consequat sed eget justo
    - Donec dictum felis auctor :spoiler[semper] porttitor
    - Duis felis quam, ornare non tempor a, accumsan sed orci
- Vivamus a facilisis est

1. Aliquam at _pretium_ eros, vitae congue orci
1. Fusce **bibendum** ac mauris eu malesuada
   1. Aliquam aliquet sed tortor ac laoreet
   1. Aenean vel nulla et ipsum consequat consequat sed eget justo
      1. Donec dictum felis auctor :spoiler[semper] porttitor
      1. Duis felis quam, ornare non tempor a, accumsan sed orci
1. Vivamus a facilisis est

### Tables

| One                         | Two              | Three                     |
| --------------------------- | ---------------- | ------------------------- |
| Morbi consectetur non velit | Tempor a massa   | Orci varius natoque       |
| Sed pulvinar sapien in odio | Cras nec nisl    | Nascetur ridiculus mus    |
| Quisque libero elit         | Aliquet sem vel  | Quisque commodo urna      |
| Ultrices a faucibus eget    | Ultricies lectus | Curabitur lobortis dictum |

### Code Blocks

```ts
import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
```

::::

```md
::accordion[From a partial]{path=welcome}
::accordion[From another partial]{path=license}
```

::accordion[From a partial]{path=welcome}
::accordion[From another partial]{path=license}

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
:::row{variant=CENTERED}
Plains | UNH
Island | UNH
Swamp | UNH
Mountain | UNH
Forest | UNH
:::
```

:::row{variant=CENTERED}
Plains | UNH
Island | UNH
Swamp | UNH
Mountain | UNH
Forest | UNH
:::

```md
:::row{variant=CENTERED}
Flooded Strand
Misty Rainforest
Polluted Delta
Scalding Tarn
:::
```

:::row{variant=CENTERED}
Flooded Strand
Misty Rainforest
Polluted Delta
Scalding Tarn
:::

```md
:::row{variant=CENTERED}
TW
IU
AoI
:::
```

:::row{variant=CENTERED}
TW
IU
AoI
:::

```md
:::row{variant=CENTERED}
IC
Cruel Bargain
:::
```

:::row{variant=CENTERED}
IC
Cruel Bargain
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

## Media

### Images

```md
![A placeholder image](https://www.placehold.co/1600x320 'High resolution')

![A placeholder image](https://www.placehold.co/800x160 'Medium resolution')

![A placeholder image](https://www.placehold.co/400x80 'Low resolution')
```

![A placeholder image](https://www.placehold.co/1600x320 'High resolution')

![A placeholder image](https://www.placehold.co/800x160 'Medium resolution')

![A placeholder image](https://www.placehold.co/400x80 'Low resolution')

### YouTube

```md
::youtube{id=3LLIFHv5kbo}
```

::youtube{id=3LLIFHv5kbo}

### SoundCloud

```md
::soundcloud{url=ddftwiki/a-history-of-doomsday}
```

::soundcloud{url=ddftwiki/a-history-of-doomsday}

### Twitter

```md
::tweet{id=1574576125535129600}
```

::tweet{id=1574576125535129600}
