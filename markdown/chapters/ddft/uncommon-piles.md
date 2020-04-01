---
order: 4
title: Uncommon Piles
---

There are a number of less commonly used ways to win the game after Doomsday.
These may no longer be as relevant as they once were, or simply may not come up
often enough in practice to be worth devoting a whole page to, but they are
still worth knowing about. We won't go too deep into these topics, as the basics
should get you through on the rare occasion this knowledge is relevant. 

## Shelldock Isle/Emrakul

The interaction between Doomsday and Shelldock Isle is surprisingly elegant.
Once you resolve Doomsday you automatically fulfill the activation condition on
Shelldock Isle, and also can ensure you hideaway the card you want. Emrakul, the
Aeons Torn is by far the best card to cast off Shelldock Isle, since you will
get an extra turn and can attack to obliterate your opponent's board.

This tech was extremely popular during the height of Miracles' power, since it
was immune to counterspells after Doomsday resolved. Blue mages would try to trap you by letting Doomsday resolve,
and you could slow-roll out an uncounterable Eldrazi to punish them. In the current metagame,
there are not enough decks that are weak to this strategy to make it worth
spending the sideboard slots, so it fell out of favor. It could certainly be a
valid metagame choice depending on what decks you expect to face.

A simple version of the pile looks like this:

> Enough life to live for 2 turns post-DD

<row variant="pile">{{!SI}} {{!Em}} {{!Isl}} {{!Dur}} {{!TO}}</row>

1. Cast Doomsday and build the above pile, then pass the turn
2. Draw and play Shelldock Isle, hide Emrakul, pass the turn
3. Draw and play Island, activate Shelldock Isle, cast Emrakul, take another
   turn
4. Cast Duress if you can, attack with Emrakul
5. Attack again next turn if needed. Oracle serves as a backup plan in case they're
   not dead yet or deal with the Emrakul.

The first 2 cards may be the only ones required to win so we have 3 extra cards
to build some redundancy, interaction and backup plans into our pile.

If you have SI in hand and a land drop available, you can do this pile and only
pass 1 turn.

If you suspect the opponent has a way to interact with the order of your pile,
like Jace's +2, you can modify the pile slightly to play around this:

<row variant="pile">{{!Pn}} {{!SI}} {{!Em}} {{!TO}} {{!DD}}</row>

Ponder on top means Shelldock Isle won't get fatesealed, you have Oracle as a backup plan, and a Doomsday
as yet another backup plan to recycle cards in case you need more turns to attack with your 15/15.

## Passing Multiple Turns After Doomsday

Passing one turn after Doomsday is sketchy enough, why would you want to pass multiple turns? Well,
sometimes it's just what you need to do. If you are severely constrained on resources, or your opponent has
a lockpiece you need to remove, or they are chock full of interaction but have no clock, you may find yourself
needing to draw multiple cards over multiple turns to deal with such situations. Thassa's Oracle provides a cheap,
clean wincon in these types of situations. Lets look at a few example:

### Example 1

> Tropical Island, Underground Sea on board, no cantrips in hand, Opponent has Chalice@2 - {{BG}} + {{UU}}

<row variant="pile">{{!AD}} {{!SW}} {{!TO}} {{!LP}} {{!LP}} </row>

This situation is pretty specific, but it illustrates the need to occasionally pass multiple turns. Consider this
a post-board game, where you're more likely to have Abrupt Decay in your deck. Perhaps your hand was nothing
but a Dark Ritual and a Doomsday, but your opponent has no clock. Make use of Doomsday's tutoring power to find a solution to
the Chalice locking your wincons.

1. Cast Doomsday and build the above pile. Pass the turn.
2. Draw Decay, and pass the turn again. Decay the Chalice on their end step.
3. Draw Street Wraith, and cycle it into Oracle. 
4. Oracle's trigger will win you the game with 2 cards left.

With this pile, you can even pass 1-2 more turns to draw mana to cast Oracle, if for example you
got hit with Wasteland. 

### Example 2

> No mana on board, no cards in hand - {{0}}, 2 life

<row variant="pile"> {{!LED}} {{!SW}} {{!Pn}} {{!TO}} {{!LP}}</row>

1. Pass the turn after casting Doomsday
2. Draw the LED, play it out, and pass again.
3. Draw the Street Wraith, cycle it holding priority to crack LED for {{UUU}}
4. Draw Ponder and cast it, leaving {{UU}} floating
5. Draw Oracle and cast it to win with 1 card left.

How did you find yourself in this position? Maybe you cast Doomsday using Lotus Petal and Dark Ritual. Let's not think too hard about it.
The point is that if you pass 2 turns, you can win from literally nothing. 

### Example 3

> Plenty of lands/mana on board - {{BBBBUU}}

<row variant="pile">{{!Dur}} {{!Dur}} {{!Dur}} {{!Dur}} {{!TO}}</row>

This is a very crude example but again, it illustrates an idea. Perhaps you cast Doomsday against
a Ux Control deck, assuming it would be countered, but they let it through. Their deck is ponderously slow,
and they aren't threatening your life total at all. You could simply pass 5 turns, draw a ton of discard, and try to
brute force your Oracle through on the last turn.

## Piles with Empty the Warrens

This is another technique, that, while its usefulness has declined sharply with the inclusion Thassa's Oracle, is 
nevertheless useful to know, since its execution requires no unusual cards. A situation could be contrived where this 
type of pile was a reasonable option though you are unlikely to encounter such a situation in the wild; for example, your opponent has
a {{Leyline of sanctity}} and a {{Meddling Mage}} naming Thassa's Oracle

### Example 1

> Ponder, LED, LED in hand - {{BBB}} + {{U}} - 6 Storm

<row variant="pile"> {{!BW}} {{!Dur}} {{!Dur}} {{!Dur}} {{!Dur}} </row>

In its crudest form, you use Doomsday as a tutor for Burning Wish, which then retrieves Empty the Warrens. The remainder
of the pile is discard or other interactive spells, to ensure your opponent can't deal with the goblins before they deal with your opponent.

### Example 2

> Ponder, LED in hand - {{BBB}} + {{1U}} + {{BBB}} - 8 Storm

<row variant="pile"> {{!IU}} {{!LP}} {{!LED}} {{!BW}} {{!DD}} </row>

In this slightly more complicated variant, you use Doomsday to set up a pile that makes Goblins, and then the next turn you use another
Doomsday to add more cards to your deck so you have time to make a lethal attack.

## Time Spiral Piles

{{Time Spiral}} was a common sideboard card in older Doomsday lists, predating
the rise of SDT Miracles. It can still be used to make functional piles, but these days is obviated
by Echo of Eons. For this reason the card sees little
to no play, but the pile is presented here for its historical interest.

The cost listed in parentheses is assumingly paid for by the lands that are
untapped by Time Spiral.

A simple example of a pass-the-turn pile that uses Time Spiral is as follows:

### Example 1

> 2 cards in hand - {{1UUR}} + ({{1R}}) - 9 Storm

<row variant="pile">{{!IU}} {{!LED}} {{!LED}} {{!BW}} {{!BW}}</row>

The first wish fetches Time Spiral, which untaps lands that let you play the
second Burning Wish to fetch Tendrils.

Note that as with Echo piles, the number of cards left over to shuffle back into your library is important,
to avoid decking yourself. Also note that the listed cost assumes that you can produce {{1R}} with the
lands that you untap with Time Spiral.

## Conclusion

1. These piles aren't going to come up all that often in a typical game, so
   don't feel you need to memorize them
2. Many of these piles are high risk in some form or another. Don't be afraid of this though. If one of these types
of piles gives you a 10% chance to win, that could be 10% more than any other option.
3. Consider these less as something to memorize and more as a source of inspiration for thinking outside the box when it comes to pile construction

