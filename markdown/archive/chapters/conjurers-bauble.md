---
title: Conjurer's Bauble Piles
---

Historically :card[Sensei's Divining Top] held a place as a standard 4-of in the
deck to act as deck filtering and a _free saved_ card draw for Doomsday piles.

After Top was banned, :card[Conjurer's Bauble] was identified as the closest
equivalent for use in Doomsday Storm or Laboratory Maniac piles that would allow
a free draw that was also resistant to having to discard as a result of using
Lion's Eye Diamond. It can be included as a singleton copy to act as a
replacement SDT element however it has some interesting properties when
multiples are available in a deck.

The most basic use of the card is of course simply as a cantrip that costs {1}.
It can also be used as a free cantrip if already in play however this does of
course result in less storm count being available. In any of the common piles
that require a non-specialist cantrip (such as Brainstorm) this can be used
instead of any others which is handy if you only have {B} post-DD for drawing
into a pile.

## Storing a Draw With CB

Let's start off by looking at the basic function of Conjurer's Bauble as simply
a tool to draw cards when using LED.

### Example 1

> SW in hand - {B}{B}{B} + {1}{U}{U}

:::row{variant=PILE}
IU
CB
SW
LED
LM
:::

You should recognise the above example from the [Basics][basics].  
Here you can see we can use CB to have a draw effect present even after we have
activated our LED for mana.

This is most applicable when you have Conjurer's Bauble in your deck alongside
an additional cantrip in hand post-Doomsday. You can use the cantrip to draw
into the pile and save the Bauble draw for when you are deeper into the pile.
This is effective, especially when you have to start the pile with low mana
resources.

This also enables things like Double Doomsday piles.

### Example 2

> CB in play, SW in hand - {B}{B}{B} + {1}{U}{U}{R} - 11 Storm

:::row{variant=PILE}
IU
LED
LED
BW
BW
:::

:::row{variant=PILE}
IU
LED
LED
SW
BW
:::

This has some overlap with what is described in the [Double Doomsday
Piles][uncommon-piles] section document. Just as historically you could with
Sensei's Divining Top, Conjurer's Bauble may be used save the draw for the
second pile in the play line.

This simple use as a cantrip is not however the true strength of CB.

## Using CB to Retrieve the Finisher

This is where we start to discuss the real differences between Conjurer's Bauble
and Sensei's Divining Top. We also get to read the rest of the text on
Conjurer's Bauble other than "T, Sacrifice ~: Draw a card.", Conjurer's Bauble
allows you (as a may effect) to target a card in your graveyard and stack it at
the bottom of our deck prior to you drawing a card with it. Do note that the
draw will be countered if your target is removed from the graveyard, so only
target something if necessary. Alongside the deck manipulation a resolved
Doomsday provides, this lets us do some nifty tricks.

The first is to ignore the downside of Lion's Eye Diamond's discard when we have
other cards in hand we need.

### Example 1

> CB in play, BW and SW in hand - {B}{B}{B} - 7 Storm

:::row{variant=PILE}
LED
IU
LED
LED
SW
:::

> CB in play, ToA and SW in hand - {B}{B}{B} - 6 Storm

:::row{variant=PILE}
LED
IU
LED
LED
SW
:::

I know often you can find yourself with a key business spell in hand and no
Brainstorm to move it with. You could use the SW to draw into a Brainstorm
however that then starts adding costs to the pile. As you can see, both piles
above cost no mana beyond the initial BBB for Doomsday.

The way the piles work is to utilise CB to send the business spell back from the
graveyard to your hand. In the first example above, you use the SW to draw into
the pile. You then play and activate the LED with the BW still in hand. With the
mana now floating you activate CB sending BW to the bottom of your deck to draw
IU.

We can also use this effect to play our finisher spell multiple times. Even on a
pass-the-turn pile. More on this in the [pass-the-turn section][pass-the-turn].

### Example 2

> LED in play, ToA in hand - {1}{B}{B}{B} - 13 Storm

:::row{variant=PILE}
IC
DR
DR
LP
CB
:::

In this instance we can play ToA twice. We draw IC for our turn.

1. Cast IC, draw DR, DR, LP and CB
1. Cast LP
1. Cast DR
1. Cast DR
1. Cast CB
1. Cast ToA for 6 Storm
1. Crack LED for {B}{B}{B}
1. Crack CB targeting ToA, draw ToA
1. Cast ToA for 7 storm

This playline results in 13 copies of ToA being available off this pile. This
example does require some quite specific circumstances but it does help
illustrate tricks you can do with Conjurer's Bauble. Even a low initial Storm
count of 5 for the first copy allows for a total of 11 storm in total. This is
great for when you have excess mana but low spell or card resources available.

## Using CB to Extend the Pile

You can use the theory of retrieving a card above to help build your pile up.
Five card decks do have limits even if we get to choose all five cards. CB
allows you to extend that to a pseudo-six cards.

> CB in play, Pre in hand - {B}{B}{B} + {1}{U} - 9 Storm

:::row{variant=PILE}
LED
IC
LED
LP
BW
:::

Normally double cantrip piles that use a draw-4 would mean that you draw
yourself to death. However, with CB in the deck, you can use the same trick as
with the IU pile. Use the Pre to draw into the pile. Cast and crack the LED for
{B}{B}{B}. You then use the CB to send the LED to the bottom of your deck and
draw IC. Using the mana from LED, you now can draw the rest of the pile: LED,
LP, BW and LED, allowing you to storm to victory.

## Using 2 CBs in a loop

This section of discussion is one of the strongest arguments advocating the use
of CB, especially in multiples. The more astute of you may have noticed one key
inefficiency of two of the piles discussed already. I will copy them again here
for convenience:

> CB in play, BW and SW in hand - {B}{B}{B} - 7 Storm

:::row{variant=PILE}
LED
IU
LED
LED
SW
:::

> CB in play, ToA and SW in hand - {B}{B}{B} - 6 Storm

:::row{variant=PILE}
LED
IU
LED
LED
SW
:::

If you notice, both result in wasted mana being left over. With the BW example
you are left with U and with the ToA example you are left with U(B/R)(B/R) left
over. Is there a way we can maximise the use of this mana?  
What if we were to swap the GP in the piles with a CB?

### Example 1

> CB in play, BW and SW in hand - {B}{B}{B} + {X} - 8+ Storm

:::row{variant=PILE}
LED
IU
LED
LED
CB
:::

> CB in play, ToA and SW in hand - {B}{B}{B} + {X} - 9+ Storm

:::row{variant=PILE}
LED
IU
LED
LED
CB
:::

Suddenly the two piles look very different notation wise. Both now have a
variable {X} value in their respective mana costs. We also see suddenly that the
ToA pile, traditionally having a lower storm count than its BW cousin has
suddenly overtake it in terms of Storm count generated.

This is because we can make use of a Bauble loop. Much like the historic looping
of two SDTs to generate Storm we can do the same thing here. With the BW
example:

1. Cast Doomsday and build the first pile
1. Activate SW, draw LED
1. Cast LED, crack LED for {U}{U}{U}
1. Crack CB targeting nothing, draw IU
1. Cast IU, draw LED, LED and CB
1. Cast CB
1. Cast LED
1. Cast LED
1. Crack LEDs for {B}{B}{B}{R}{R}{R}
1. Crack CB targeting BW, draw BW
1. Cast BW targeting ToA
1. Cast ToA

Simple enough right?

What about if you had some extra mana available before you cast the first GP?

What you can do is instead of targeting BW straight off with the second CB, you
can instead target the first one used to draw the IU. This lets you loop your
two CBs costing only 1 mana for each loop. This means that you can directly
convert excess mana into extra storm on a 1:1 basis.

This also explains why the ToA pile above now has a greater storm count. The
pile still has 2 mana left over after casting and using all of its LEDs so you
can use that to generate two CB loops. As a result the ToA pile gains +2 storm
compared to its normal default.

As CB enables many low mana cost, high Storm piles it is perfect to use it for
pass-the-turn piles. The above examples can be generated for -1 Storm each as
pass-the-turn piles however you likely have extra mana available to increase
your potential X value.  
Let's have one last look at a pass-the-turn pile using CB looping this time
using IC over IU. Some IC-based decklists choose not to play Bauble in
multiples, but this pile is a fine example of why you may want to.

### Example 2

Pass the turn.

> CB in play, ToA in hand - {B}{B}{B} + {X}{1} - 12+ Storm

:::row{variant=PILE}
LED
IC
LED
LED
CB
:::

1. Cast Doomsday and build the above pile
1. Pass the turn
1. Draw LED for turn
1. Cast LED
1. Crack LED for {B}{B}{B}
1. Crack CB targeting LED, draw IC
1. Cast IC, draw LED, LED, CB and LED
1. Cast LED
1. Cast LED
1. Cast LED
1. Cast CB
1. Crack LEDs for {B}{B}{B} {B}{B}{B} {B}{B}{B}
1. Crack CB targeting CB, draw CB
1. Cast CB
1. Repeat steps 13 and 14 until you have 4 mana left in pool
1. Crack CB targeting ToA, draw ToA
1. Cast ToA

These tricks with CB allow for a number of iterations based on these simple
concepts. They are useable with IU or IC which means you can have a lot of
flexibility in terms of deckbuilding and card choices.

## Using CB to Play Around Hate

CB has a few niche cases that allow it to mitigate opposing hate cards. Whilst
many of its uses do have a weakness to severe graveyard hate such as Rest in
Peace, it can help against some of the softer hate cards or corner case
scenarios.

Surgical Extraction is very effective against Doomsday. It not only takes out
potential key cards from being used but also forces the player to shuffle their
library thereby destroying the order they had stacked it. CB can help protect
the pile by acting as a blocker. When Surgical Extraction is cast on something
in your graveyard, you can respond by sending the target card to the bottom of
the deck thus causing the Surgical to _fizzle_ with no legal target.

The main trick with this is timing. You obviously cannot use the CB as part of
the main pile itself so it must sit on the sidelines waiting. You also cannot
use it at the wrong time as that could lead to (as an example) instances of
drawing both an LED and the IU you intended to cast with the LED mana. Most of
the time a player will attempt to Surgical in response to you trying to draw
into your Doomsday pile. If you can plan around this you should be able to
nullify their Surgical.

> CB in play, SW in hand - {B}{B}{B} + {U}{U} - 6 Storm

:::row{variant=PILE}
IU
LED
LED
SW
BW
:::

If they cast Surgical in response to SW, you can use CB to send the target back
into the deck. If they cast it in response to IU you can do the same trick. Once
IU has resolved, it does not matter if they cast Surgical as we have one card
left in our library and no copies of it to extract in the graveyard.

This selective blocking of graveyard targets is also functional pre-combo.

A simple use of CB is simply as a non-U cantrip. Often players will bring in
Pyroblasts to disrupt the combo targeting the IU or other cantrips used to draw
into the piles. CB can act as a simple 1 mana _draw a card_ spell that dodges
blasts. When paired with IC, we can build a pile that is completely immune to
Pyroblast effects.

## Summary

1. CB can be used to save a draw when using LED for mana
1. CB can be used to retrieve cards for multiple uses in a pile
1. CB can be used to extend a pile
1. CB can be used to get around some hate cards
1. Be mindful of targeted graveyard hate if exposing your cards to the graveyard
   when using CB

Remember as with anything it is better to learn the concepts presented here more
so than to try and rote-learn piles and of course, practice makes perfect.

[basics]: /chapters/1/basics
[pass-the-turn]: /chapters/2/pass-the-turn
[uncommon-piles]: /chapters/2/uncommon-piles
