---
authors: drynne
banner: Em
title: Deck Construction
---

## Table of Contents

## Preamble

The idea behind modern builds of Entombsday is to take the Turbo Doomsday shell,
move the Doomsday package to the sideboard (Doomsday, tutors, Thassa's Oracle,
and pile cards), then add the Tin Fins combo package to the maindeck. As such,
the deckbuilding ideas mirror those expressed in the [Deck
Construction](/meandeck/deck-construction) chapter of the Doomsday Wiki.

Below is a sample Entombsday list, followed by a Turbo Doomsday and Tin Fins list:

::decklist{path=2023/03/entombsday.drynne}
::decklist{path=2023/03/turbo.eternalrant}
::decklist{path=2023/03/tinfins.drynne}

When comparing the Entombsday list to the Tin Fins list, you should notice a
slight reduction in the size of the combo package and a shift toward
countermagic over discard.

When comparing the Entombsday list to the Turbo Doomsday list, you'll notice
that the maindeck of both only differs by ~25 cards with many of those being due
to the choice of specific fetchlands, discard spells, and counterspells. You'll
also notice that most of the missing cards from the Doomsday maindeck are
present in the sideboard of the Entombsday list.

## The Shell

The shell of Entombsday is made up of cantrips, counterspells, discard,
acceleration, and lands. Most lists will run nine to eleven cantrips, six to
eight counterspells, three to five discard spells, eight to ten pieces of
acceleration, and about fourteen lands.

### Cantrips

:::row{variant=CENTERED}
Brainstorm
Ponder
Preordain
Consider
:::

Cantrips play a vital role in {U} Legacy decks by allowing you to filter your
draws to find the card you need without having to rely solely on the top of your
deck and your opening hand. This is especially true in Entombsday, as we have a
lower density of reanimation effects than pure Tin Fins lists and access to
fewer tutor effects that Turbo Doomsday lists.

As stated above, most lists run about 10 cantrips.

The two main cantrips run in Entombsday are :card[Brainstorm] and :card[Ponder].
Just like in Doomsday lists, these should almost-never be run as less than
four-ofs. The next best cantrip is :card[Preordain] and it is most commonly run
as a two-of.

Since it's printing in 2021, Entombsday lists have also started running one copy
of :card[Consider] in place of the third Preordain due to it's utility in both
gameplans. In addition to enabling several Doomsday piles, it is able to _bin_
Griselbrand or Emrakul directly from your library (generally after setting it up
with another cantrip).

### Counterspells

:::row{variant=CENTERED}
Force of Will | DMR | 284
Daze
Misdirection
Flusterstorm
:::

As a {U} Legacy deck, Entombsday runs a number of counterspell effects that
enable it to protect its combos, primarily :card[Force of Will] and :card[Daze].
Force of Will is always run as a four-of, while only two or three copies of Daze
are included.

A single copy of :card[Misdirection] can be run, usually in place of a copy of
Daze. Misdirection allows for some interesting play patterns, such as
redirecting an opponent's :card[Surgical Extraction], but is generally worse
than Daze and is considered _spicy_.

In the sideboard, we typically run a single copy of :card[Flusterstorm].
Flusterstorm is a staple of Tin Fins sideboards and can be used to protect our
combos and disrupt opponent's.

### Discard Spells

:::row{variant=CENTERED}
Thoughtseize
Cabal Therapy
Collective Brutality
:::

As a {B} deck, Entombsday has access to a number of Discard effects, the most
important of which is :card[Thoughtseize]. Generally run as a two or three of,
Thoughtseize can be used to "punch a hole" in fair {U} matchups, disrupt
opposing combos, and&mdash;critically&mdash;discard a Griselbrand or Emrakul
from hand. Because of the need to discard our creatures, cards like
:card[Duress] and :card[Grief] are not played in Entombsday despite being common
in Turbo Doomsday lists.

:card[Cabal Therapy] enables several interactions that are important to the Tin
Fins half of the deck.

1. It is a way to discard yourself without needing to pay the 2 life for Thoughtseize
1. It allows you to sacrifice Griselbrand to put it back into the graveyard and
   avoid the exile clause of the reanimation spells if you whiff on your combo
   turn.

:card[Collective Brutality] is an uncountable way to discard Griselbrand or
Emrakul. By casting it with at least one Escalate mode, you are able to discard
a card as a cost, preventing your opponent from countering it. Collective
Brutality also allows you to win without the combat step by draining your
opponent for two life every time you _loop_ your library. Despite these upsides,
the card can be clunky and has been cut by some players recently.

### Mana Acceleration

:::row{variant=CENTERED}
Dark Ritual
Lotus Petal
Chrome Mox
LED
:::

Mana acceleration is one of the defining features of Legacy combo decks. By
cheating on mana and being able to resolve your combos as early as turn one, you
can invalidate any pressure your opponent is presenting on the board and reduce
the likelyhood that they are able to find interaction to disrupt you.

The two primary pieces of mana acceleration for Entombsday are :card[Dark
Ritual] and :card[Lotus Petal]. Dark Ritual provides the exact mana needed for
both combos&mdash;{B}{B}{B} for :card[Doomsday] and {B} + {1}{B} for
:card[Entomb] and :card[Shallow Grave]. Lotus Petal allows you to run a low land
count, gives you access to additional mana while comboing off, and is useful for
building certain Doomsday piles. Dark Ritual and Lotus Petal should always be
included as four-ofs.

Some Entombsday lists opt to run a single copy of :card[Chrome Mox] as a pseudo
fifth Lotus Petal. This can allow for additional turn one combos and is another
source of non-land mana while comboing. Notably, imprinting :card[Lim-Dul's
Vault] under Chrome Mox allows you to "build your own" :card[Underground Sea].

:card[Lion's Eye Diamond] is typically included in the maindeck of Entombsday.
It enables several low-resource Doomsday piles and can be used to _bin_ a
Griselbrand in Response to a Shallow Grave. Some recent lists have opted to move
LED to the sideboard, but it is currently still considered a staple and should
be run as a one-of in the maindeck.

### Lands

:::row{variant=CENTERED}
Polluted Delta
Flooded Strand
Marsh Flats | MH2 | 437
:::

Entombsday is primarily a {U}{B} deck that splashes {W} for :card[Children of
Korlis]. The deck generally runs eight fetchlands consisting of four
:card[Polluted Delta] and a split of other {U} or {B} fetchlands&mdash;typically
two copies of :card[Flooded Strand] and two copies of :card[Marsh Flats], but
other variations are common.

:::row{variant=CENTERED}
Underground Sea
Scrubland
Island | PALP | 2
Swamp | PALP | 10
:::

The fetchable lands typically consist of three to four copies of
:card[Underground Sea], a single :card[Scrubland], one :card[Island] and one
:card[Swamp]. Scrubland is not required for the deck, but is strongly
recommended, as it allows you to cast Children of Korlis off of a land in the
event that you do not draw a Lotus Petal while comboing.

Some lists opt to only run two copies of Underground Sea (usually for budget
reasons) and will substitute and additional Island and an :card[Urborg, Tomb of
Yawgmoth]. This is serviceable, but suboptimal.

## The Combo Packages

:::row{variant=CENTERED}
Entomb
Shallow Grave
Griselbrand
:::

The core combo package of Tin Fins consists of a minimum of four copies of
:card[Entomb], six reanimation spells, two copies of :card[Griselbrand], an
:card[Emrakul, the Aeons Torn], and a :card[Children of Korlis]. Emrakul has
generally fallen out of favor in :card[Doomsday] lists, but is integral to the
Tin Fins strategy as she allows looping the deck and swinging for lethal.

The Doomsday package in the sideboard is somewhat streamlined compared to
current Doomsday list. It still includes four copies of :card[Doomsday], one to
two copies of :card[Thassa's Oracle], and a :card[Cavern of Souls], but there is
only space for two copies of :card[Personal Tutor], two :card[Street Wraith],
and one :card[Edge of Autumn].

## Notable Inclusions

:::row{variant=CENTERED}
Lim-Dul's Vault
Shelldock Isle
:::

:card[Lim-Dul’s Vault] - While slow, LDV allows you to find Entomb, a
reanimation spell, and Doomsday. Unless :card[Mystical Tutor] gets unbanned (one
can dream!), it’s our best option for a tutor that finds both combos.

:card[Shelldock Isle] - This is another card that has seen less inclusion in
Doomsday lists, but we include it since we already have an Emrakul in the deck.
This enables some fairly simple piles that play around :card[Endurance] and
:card[Painter’s Servant] + :card[Grindstone].

## Sideboard Options

:::row{variant=CENTERED}
Echoing Truth
Flusterstorm
:::

Because Entombsday is defined by the transformative sideboard from Tin Fins to
Doomsday, the slots available for other sideboard cards are very limited to
between two and four cards. Becvause of this, the slots chosen need to be highly
impactful in a specific matchup or broadly applicable across the metagame. The
two most common options are :card[Echoing Truth] and :card[Flusterstorm].

Echoing Truth is broadly applicable to the metagame by enabling you to interact
with things such as :card[Urza's Saga] tokens, :card[Dress Down], a resolved
:card[Teferi, Time Raveler], :card[Chalice of the Void] set to one,
:card[Trinisphere] and many more.

As discussed above, Flusterstorm is a potent tool for fighting opposing combo
decks and powering through opposing countermagic. Notably, it will function
through a :card[Pyroblast] effect and a Chalice on one.

## Other Playables

There are several other cards that are playable in an Entombsday shell, but are
considered non-standard and aren't seen often. A few examples are listed below:

:card[Predict] and :card[Ideas Unbound] - Predict and Ideas Unbound allow you to
quickly draw through your Doomsday pile and build protection into it at the cost
of making you vulnerable to disruption like :card[Pyroblast].

:card[Spell Pierce] - Similar to Flusterstorm, Spell Pierce is another option
for a one CMC counterspell. It answers Planeswalker spell, which Flusterstorm
does not, but is otherwise less useful.

:card[Chain of Vapor] - Cheaper to cast than :card[Echoing Truth], but can’t
bounce :card[Chalice of the Void] on 1.

:card[Reanimate] - Tin Fins lists will sometimes run a single copy of Reanimate
to allow you additional routes to combo off, as well as allowing you to
reanimate Children of Korlis using fewer reources. This is generally not
standard for Entombsday, but is an option if you would like to try it. It can
also enable Doomsday piles that mill Thassa's Oracle with Consider, but this
opens you up to graveyard hate, which Entombsday is built to dodge.

## Example Lists

> Last updated 29 March 2023

Below are three example Entombsday lists:

::decklist{path=2023/03/entombsday.drynne}
::decklist{path=2023/03/entombsday.nitro_rick}
::decklist{path=2023/03/entombsday.missdestroy}
