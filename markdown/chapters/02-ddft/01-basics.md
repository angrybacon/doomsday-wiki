---
banner: ToA
title: The Basics
---

## Preamble

The goal of all Magic decks is to win the game. Doomsday aims to do so by
casting its namesake card and constructing a _pile_ of 5 cards tailored to the
current game state. While it would be nigh impossible to enumerate every game
state and pile variation, we can definitely go over the basics. There are 2
cards that we will typically be using in conjunction with Doomsday to actually
bring about our opponent's demise: Tendrils of Agony (usually found via Burning
Wish), and Thassa's Oracle.

## Basic Doomsday Piles

The Doomsday piles that we will explain here are all based on using either Ideas
Unbound or Infernal Contract as the big draw spell. There is some division in
terms of decklists so adjust accordingly.

There are some key rules you can use to help remember things like Storm count.
If the intended pile is meant to win without passing the turn then you always
have at least 1 Storm to begin with from Doomsday itself. Additionally if all
cards used in the Doomsday pile are spells you can cast, then you get to add 5
Storm from that. Breaking down the card sets of pre-pile, pile and wish targets
helps the mind easily compute what Storm count you will end up with from a
certain line of play.

### Single Cantrip Piles

There are basically two variants to this pile. You either have a cantrip that
draws a single card in hand ready to cast, or a :card[Conjurer's Bauble] in
play. For the moment, the difference does not really matter and we'll just
assume that you have a Ponder in hand and {U} to cast it.

#### Ideas Unbound

> Cantrip in hand - {B}{B}{B} + {U}{U}{U} - 7 Storm

:::row{variant=PILE}
IU
LED
LED
SW
BW
:::

1. Cast Doomsday and build the above pile
1. Cast Cantrip from hand, draw IU
1. Cast IU, draw LED, LED, SW
1. Cast LED
1. Cast LED
1. Activate SW, hold priority crack LEDs for {B}{B}{B}{R}{R}{R}, draw BW
1. Cast BW for ToA
1. Cast ToA

This pile has cost you {B}{B}{B} + {U}{U}{U} and 2 life and results in 7 Storm,
that is only 14 lifeloss. Note that the {U}{U} for IU is often paid for by a
Lion's Eye Diamond. With a Dark Ritual to cast Doomsday and a Lion's Eye Diamond
preceding the Doomsday you're already up to 18 lifeloss. Add in a Duress or an
extra ritual beforehand and they're dead.  
If you are low on life or need an extra storm, you'll can exchange the Street
Wraith with a Ponder at the cost of 1 more {U} mana.

> Cantrip in hand - {B}{B}{B} + {U}{U}{U}

:::row{variant=PILE}
IU
LP
LP
SW
TO
:::

1. Cast Doomsday and build the above pile
1. Cast Cantrip from hand, draw IU
1. Cast IU, draw LP, LP, SW
1. Cycle SW to draw Oracle
1. Use the Petals to cast Oracle
1. Oracle triggers with no cards left in your deck for the win

This pile costs the same as the Tendrils pile, but the storm count doesn't
matter, which obviously is great when you can't generate enough storm.

#### Infernal Contract

> Cantrip in hand - {B}{B}{B} + {1}{U}{B}{B}{B} - 8 Storm

:::row{variant=PILE}
IC
LP
LED
LED
BW
:::

1. Cast Doomsday and build the above pile
1. Cast cantrip, draw IC
1. Cast IC, draw LP, LED, LED, ToA
1. Cast LP and the LEDs
1. Cast BW, holding priority, then crack LEDs for BBBBBB
1. Retrive ToA from your sideboard and cast it

This pile costs {B}{B}{B} + {1}{U}{B}{B}{B}, requires you have at least 2 life
post-Doomsday, and results in 8 Storm. Like with Ideas Unbound, the mana cost
for the Draw-4 can be - and often is - paid for by a Lion's Eye Diamond in
response to the first cantrip.

> Cantrip in hand - {B}{B}{B} + {U}{B}{B}{B}

:::row{variant=PILE}
IC
LP
LP
LP
TO
:::

1. Cast Doomsday and build the above pile
1. Cast cantrip to draw IC
1. Use the Petals to cast Thassa's Oracle
1. Oracle triggers with no cards in library for the win.

Oracle piles can be done with Infernal Contract as well, and cost 1 less mana
than a Storm pile with Contract.

### Double Cantrip Piles

#### Ideas Unbound

> Pnd, Pnd in hand - {B}{B}{B} + {1}{U}{U} - 9 Storm

:::row{variant=PILE}
LED
IU
LP
LED
BW
:::

1. Cast Doomsday and build the above pile
1. Cast a Ponder to draw LED
1. Cast LED
1. Cast the other Ponder, hold priority crack LED for {U}{U}{U}, draw IU
1. Cast IU, draw LP, LED, BW
1. Cast LP
1. Cast LED, crack LP for {R}
1. Cast BW, hold priority crack LED for {B}{B}{B}, get ToA
1. Cast ToA

This pile costs {B}{B}{B} + {1}{U}{U} to execute and results in 9 Storm. We use
the second cantrip in hand to draw a Lion's Eye Diamond before executing the
rest of the pile and use that Lion's Eye Diamond to pay for much of the rest of
the pile. We basically turn our additional cantrip into a Lion's Eye Diamond
with Doomsday.

> Pnd, Pnd in hand - {B}{B}{B} + {U}{U}

:::row{variant=PILE}
LED
IU
LP
LP
TO
:::

1. Cast Doomsday and build the above pile
1. Cast a Ponder to draw LED
1. Cast LED
1. Cast the other Ponder, hold priority crack LED for {U}{U}{U}, draw IU
1. Cast IU, draw LP, LP, TO
1. Use the Petals to cast Oracle
1. Oracle triggers with no cards left for the win

Double cantrip piles are cheaper and more straightforward with Thassa's Oracle,
requiring merely the cost of the 2 cantrips post-Doomsday. Note that in each of
these piles, the cantrip doesn't matter, you simply need the resources to cast
it. If you had 2 Street Wraiths in hand, this pile would cost 4 life after
Doomsday, but no additional mana.

#### Infernal Contract

> CB, Pre in hand - {B}{B}{B} + {2}{U} - 10 Storm

:::row{variant=PILE}
LED
IC
LED
LP
BW
:::

1. Cast Doomsday and build the above pile
1. Cast Pre, draw LED
1. Cast CB, cast LED, crack it for {B}{B}{B}
1. Activate CB targeting LED, draw IC
1. Cast IC, draw LED, LP, BW, LED
1. Cast LED, LED, LP
1. Cast BW, hold priority cracking LEDs for {B}{B}{B}{B}{B}{B}, getting ToA
1. Cast ToA

Double cantrip piles with Infernal Contract require a Conjurer's Bauble, since
if you can't put a card back into your deck you'll deck yourself when you try to
draw 4. This is not a situation that you will likely find yourself in, as
Draw-4s like Infernal Contract and Conjurer's bauble tend to be uncommon
deckbuilding choices in the most recent DDFT lists.

## Variations

That's it for the basic and most common piles. There are many variations of each
pile and it doesn't really make sense to list them all. In each of the above
piles you may replace one cantrip with another, you simply need the life or mana
to use it. Also of note, the use of an on-board Conjurer's Bauble to draw into
the piles allows for lower mana or life costs but does result in less Storm
being generated during the play line.

The most important part of learning how to cast Doomsday is to try not to think
of the specifics too much. Try to break everything down into resources. The key
ones are the cards you hold in hand, the mana available, any other cards in play
like Conjurer's Bauble and your deck construction. As you get more familiar with
these factors you can then start to consider your opponent as a factor and
become more experienced in generating piles on the fly to fit whatever gameplay
scenario you might come across.

This is only a small subset of the types of piles you'll require, but these
basic forms are the foundation for other piles you'll encounter. In later
chapters, you'll learn tricks for increasing Storm count, swapping cards into
your piles with Brainstorm, and crafting piles that can win through certain
types of disruption.

## Conclusion

1. You generally need a card that lets you draw most of your pile
1. Lethal Storm via Tendrils of Agony and Thassa's Oracle triggers are the most
   common win conditions for the deck. Each is best applied in different game
   scenarios which you'll learn with time.
1. Holding priority when cantripping with LED in play is key, make sure to get
   into this habit

## Get Started

You now have sufficient information to start practicing! Start goldfishing and
try to figuring out what piles to build and how to execute them.

::decklist{path=ddft}
