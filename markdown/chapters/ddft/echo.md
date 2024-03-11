---
banner: EoE
title: Using Echo of Eons in Piles
---

## Table of Contents

## Preamble

Echo of Eons is a comparatively recent addition to the DDFT arsenal, and is
quite powerful and flexible. A deck like The Epic Storm uses it as an
alternative Storm engine, and while we can use it that way too, it has some very
interesting applications in Doomsday piles. If you're an :card[Old Fogey] when
it comes to Doomsday, you may see some similarities between the piles presented
here and the :card[Time Spiral] piles of yore.

If you're reading these in order, you'll have seen a simple Echo pile example
among the pass-the-turn piles. We'll go into more depth about them and discuss
some of the unique aspects about Echo piles, but let's start from the beginning.

## Basic Echo Piles

### Example 1

There are only 5 cards in a pile, and Echo makes you draw 7. This means you'll
need 2 more cards. Echo does not count, as flashback will exile it. One of those
can be Doomsday itself, which will be in your graveyard. In the simplest
scenario, the 7th card is Lion's Eye Diamon, which you will crack to both
generate mana for the flashback cost on Echo, and also to deposit it into your
graveyard.

> LED, Echo in hand - {B}{B}{B} - 10 Storm

:::row{variant=PILE}
LP
LP
LED
LED
BW
:::

1. Cast Doomsday and build the pile described
1. Cast LED and activate to to make {U}{U}{U}
1. Use that mana to flashback Echo of Eons
1. Draw the 7 remaining cards
1. Cast all 3 LEDs and the 2 Petals
1. Cast Burning Wish, holding priority to crack at least 2 LEDs for
   {B}{B}{B}{B}{B}{B}
1. Retrieve Tendrils of Agony from your sideboard and cast it targeting your
   opponent

This pile is rather elegant if you ask me. It's mana efficient, and also flashy,
which is appealing. You need 2 rather specific cards in hand but the upfront
mana cost is merely the price of Doomsday, and it generates all 10 storm on its
own. The most glaring downside of this pile, something it shares with all Echo
piles, is that your opponent also draws a fresh hand, meaning they can draw all
manner of nasty interaction. We won't worry about this for now. Some decks won't
even have any interaction, and there are techniques to be used against those
that do, but for now we will pretend this isn't a factor and simply focus on how
the piles work.

### Example 2

> Echo, Ponder in hand - {B}{B}{B} + {U}

:::row{variant=PILE}
LED
LP
LP
LP
TO
:::

This pile is very similar to the first one, except you need to Ponder to grab
LED off the top. We're also using Thassa's Oracle here simply to demonstrate
that it can be used just as easily to win in Echo piles.

## Getting Fancier

What happens when you aren't so lucky to have exactly 7 cards left over? Lets
take a look at an example.

### Example 1

> Brainstorm, 2 useless cards in hand - {B}{B}{B} + {U} - 9+ Storm

:::row{variant=PILE}
EoE
LED
LED
Ponder
BW
:::

To start this pile, you cast Brainstorm and trade the 2 useless cards for Echo
and 2 LEDs. PLay out both LEDs, crack them for UUURRR, and flashback Echo,
leaving UUR floating. Now you will draw 7 of the remaining 8 cards. Here's where
it gets a little complicated. You need both LEDs and the Burning Wish in hand to
win the game. If you have them, great. Play out the LEDs, wish for Tendrils, and
win. If you are missing one piece, you will need to Ponder for it. You can only
be missing one piece, and if you are, then the Ponder will be in your hand to
find it. Cast Ponder, draw the missing piece, and then play out the LEDs and
wish for Tendrils.

### Example 2

Sometimes it is tough to avoid a bit of non-determinism when you have multiple
extra cards in hand.

> LED, Echo, and 2 useless cards in hand - {B}{B}{B}

:::row{variant=PILE}
LP
LP
LP
Pnd
TO
:::

This pile will start out identically to our other, casting Echo to draw a
fresh 7. Unfortunately, there are 9 cards left due to those pesky useless cards
that had been in your hand. If you have the Oracle and the means to cast it,
great, There are 2 cards left, so if the Oracle survives, you win. But there are
2 "fail cases", outcomes where you simply can't win:

1. The 2 remaining cards are Ponder and Thassa's Oracle
1. The 2 remaining cards are 2 Lotus Petals

Luckily, the chances of success with this pile is approximately 90%. These odds
are good enough that you should take the chance almost every time.

### Example 3

Echo can be used in manner similar to Brainstorm, to move cards in your hand
into the pile.

> LED, Echo, Oracle in hand - {B}{B}{B}

:::row{variant=PILE}
LP
LP
LP
Pnd
Tsz
:::

For just the cost of a Doomsday, you can get that Oracle back into your deck to
draw again. In this situation you will draw 7 out of 8 remaining cards, but like
in example 2 you can Ponder for it, and in the best case scenario you'll even be
able to cast the discard spell for protection before casting Oracle.

## Extra Fancy

It is possible to use multiple Echoes to build very high storm counts, enabling
you to kill with :card[Grapeshot]

> LED, Echo, LP in hand - {B}{B}{B} + {R} - 10 + 12 Storm

:::row{variant=PILE}
EoE
LED
LED
LED
BW
:::

Cast Doomsday, play out your mana artifacts, sacrifice them all for UUUR, and
flashback Echo. Now for the sake of demonstration, Let's assume you draw the
ideal 7: 3 LEDs, Echo, BW, and the Lotus Petal. Cast all your mana artifacts,
then cast Burning Wish holding priority, and cracking your LEDs for UUURRRRRR.
Retrieve Grapeshot and cast it, dealing 10 damage to your opponent. Flashback
Echo, and draw the remaining 7 cards. Play out your mana artifacts once again,
and use the floating mana to Grapeshot a 2nd time, for at least another 12
damage.

You need to get lucky here when you draw for your first Echo since you need to
at least draw Burning Wish, LED, and Echo. Any additional mana you have
available will make your life easier. Of note, if you don't draw Burning Wish on
the first Echo you won't be able to kill with Grapeshot, but you can still Echo
again and have plenty of storm for a lethal Tendrils the next time around.

## Conclusion

1. Echo enables some extremely mana-efficient piles that generate high storm
   counts.
1. Some Echo piles are nondeterministic out of necessity, but don't let this
   scare you off. They typically still have a high probability of working.
1. There are inherent risks with Echo piles, particularly the fact that your
   opponent will also draw a fresh hand.
