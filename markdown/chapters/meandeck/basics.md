---
authors: angrybacon, Labman13, Doishy
order: 0
title: The Basics
---

## Table of Contents

## Preamble

The goal of all Magic decks is to win the game. :card[Doomsday] aims to do so by
casting its namesake card and constructing a _pile_ of 5 cards tailored to the
current game state. While it would be nigh impossible to enumerate every game
state and pile variation, these chapters are aimed to show you the basic
concepts behind casting and winning with Doomsday. There is one primary win
condition that is used in this version of the deck to win with and that is via
:card[Thassa's Oracle].

## Pile Construction Steps

A _pile_ in this context is what we use to describe the stack of five cards that
comprise your library after the resolution of Doomsday. This is terminology that
will be used throughout the Wiki.

There are three steps that need to occur to enable you to win (at least most of
the time):

1. Resolve Doomsday
1. Draw into your pile enough so that the Oracle's trigger can win you the game
1. Resolve Thassa's Oracle

:::row{variant=CENTERED}
DD
TO
:::

Of these steps, we will provide additional focus on how to achieve steps 2.
and 3. as these are the first steps that are unique to the Doomsday archetype.
Other decks like Omnitell have similar transferable skills in order to resolve a
specific key spell however it is the _pile_ construction that is often the
trickiest element of playing the deck for newer players of the archetype.

:::row{variant=CENTERED}
Pre
SW
:::

The first consideration to make is how you will _dig_ into the pile. We will use
the phrase _dig_ to mean to initially draw into the five cards you have stacked
with Doomsday.

The most common way to _dig_ into your pile is via a _cantrip_ effect. This is a
spell or ability which draws a card upon resolution. Typically this is provided
by one of the commonly played {U} filter effects like :card[Preordain] or a free
cycle effect like :card[Street Wraith]. If you are not under pressure you can
also simply pass the turn to the opposing player and use your next turn's draw
step in order to _dig_ into the _pile_. When this is performed it is simply
known as a _pass-the-turn pile_ or _PTT pile_.

Once you have decided what method you will _dig_ into your pile with, you need
to work out how you are going to get through enough cards that the trigger from
:card[Thassa's Oracle] will win you the game. Sometimes this means having up to
two cards left in your library on its resolution, other times it means needing
to have no cards left in your library on resolution. The former is known as an
_imperfect pile_ and the latter a _perfect pile_. An _imperfect pile_ is named
as such because if your opponent is able to remove the Oracle from play prior to
resolution of its trigger then you will not win the game.

## Pile Notation

In this section we will explore some of the simplest and most commonly used
piles in order to achieve a _perfect pile_ for your Oracle trigger to resolve.

In each example we shall present any mana requirements or card requirements
followed by the pile as a visual display.

If we take the following example:

> {U}{U} + Cantrip

The cost omits that we require {B}{B}{B} for casting Doomsday as this is an
assumed requirement for even considering what pile to build. It requires {U}{U}
for casting specific cards in the pile and the ability to _cantrip_. If the
chosen _cantrip_ effect costs mana you will need to add this on to the total
otherwise presented. In the example of using Preordain as your cantrip you will
need {U}{U} + {U}.

> {U} + Brainstorm + X

Sometimes we will use the terminology of _X_. In this instance X means having
any single card in hand, irrespective of what that card is. An X card is
normally used in conjunction with :card[Brainstorm] and thus is rarely cast but
we will explore more of this in another chapter.

## Single Cantrip Ideas Unbound Piles

> {U}{U} + Cantrip

:::row{variant=PILE}
IU
LP
LP
SW
TO
:::

Here you can use a cantrip to access the :card[Ideas Unbound]. This allows you
to draw the two :card[Lotus Petal]s and the cycle effect. You can then cycle to
draw the Oracle and cast it using the two Petals. Because this pile does not
make use of :card[Lion's Eye Diamond] you can hold up cards like :card[Force of
Will] or :card[Daze] in order to protect it. You can also substitute Street
Wraith for :card[Edge of Autumn] if you are low on life or a Lotus Petal for a
:card[Cavern of Souls] if you have a land drop available to you.

## Single Cantrip Predict Piles

> {1}{U} + Cantrip

:::row{variant=PILE}
Pdt
Pnd
LED
SW
TO
:::

This is a slightly different take for people who wish to use :card[Predict] over
Ideas Unbound. In this example you use your cantrip effect to draw Predict. You
cast Predict to name the top card of your deck, in this example Ponder, drawing
the cycle effect and Lion's Eye Diamond. You cast the LED. You then cycle, hold
priority, and _crack_ the LED for {U}{U}{U}.

_Crack is a colloquial term for activating a mana rock like LED or Lotus Petal
or for sacrificing a Fetchland like :card[Polluted Delta]._

Once the cycling effect resolves, you will now have the mana to cast Oracle.

## Double Cantrip Piles

> Cantrip + Cantrip

:::row{variant=PILE}
LED
IU
LP
PoN
TO
:::

:::row{variant=PILE}
LED
Pdt
SW
LP
TO
:::

If you find yourself constrained on the mana to cast both a cantrip, and one of
your two mana draw spells but have an additional, useable cantrip in hand then
you can construct what is known as a _double cantrip_ pile. You use the first
cantrip to draw the LED. Cast it and in response to the second cantrip, _crack_
the LED for {U}{U}{U}. This will then allow you to draw into the draw spell and
cast it to draw into Oracle and the LP required to cast it.

In one of those examples above we have included a suggestion where you can
include protection within the pile. If you have the available mana it may help
you against opponents who are either trying to slow roll their permission spells
or who are holding something like :card[Stifle].

## Consider Piles

> {U} + Consider

:::row{variant=PILE}
DA
LED
SW
LP
TO
:::

If you are low on resources you can utilise the above pile using :card[Consider]
in conjunction with :card[Deep Analysis]. Consider allows you to put Deep
Analysis into your graveyard and draw the Lion's Eye Diamond. You can then cast
the Deep Analysis with Flashback in order to draw into additional mana and the
Oracle. You can of course replace Petal with Cavern of Souls if you have a land
drop available.

Similarly, you can replace the Consider in hand with a cycling effect.

> {U} + Cycler

:::row{variant=PILE}
Consider
DA
LED
LP
TO
:::

## Piles Not Using Predict nor Ideas Unbound

In the event that your draw spell gets exiled, usually by pitching them to
Force of Will or through your opponent actions, you need another way of drawing
into your pile. With enough initial mana, regular cantrips and cyclers will do
just fine.

If short on mana and LED becomes necessary, you can replicate the _double
cantrip_ piles from above using the first cantrip to draw into LED, and the
second cantrip to dig deeper into your pile while cracking the LED for mana.

> Cantrip + Cantrip

:::row{variant=PILE}
LED
SW
EoA
Pnd
TO
:::

The above pile is pretty simplistic but shows that sometimes the simplest route
is the most effective one. With additional cantrips you can even include
protection slots within the pile.

For any of the above examples you can reduce the cost drastically by using the
free cyclers Street Wraith and/or Edge of Autumn. There are also some
interesting tricks we can utilise where the card :card[Brainstorm] is one of the
cantrips within our hand however we will cover those in another chapter.

Another option is the use of Deep Analysis if you have it, or an LED in hand.
Deep Analysis and LED can be interchanged:

> Lion's Eye Diamond + Cycler

:::row{variant=PILE}
DA
SW
SW
LP
TO
:::

## Passing the Turn

As previously mentioned, a _pass-the-turn pile_ or _PTT pile_ is simply one
where, instead of having a cantrip to draw into the pile in hand, you utilise
your draw for the turn instead. There are many reasons why passing the turn
might be advantageous or necessary based on the resources available to you.

Take the following example:

> 7 Card opening hand  
> Game 1  
> On the play

:::row{variant=HAND}
DR
DD
FoW
FoW
Swamp
Island
Pre
:::

Here we have a great example of what looks to be a _combo ready hand_ however we
cannot actually go off in the same turn with it. Even if we were to wait one
more turn we still wouldn't have the guaranteed win and our opponent could very
well play some interactive piece that punishes us for waiting.

Given we have some protection in hand already, it is probably best to _jam_ DR
into DD off of the Swamp and build something like what we have already seen in
the examples above:

> PTT

:::row{variant=PILE}
Pdt
SW
LED
EoA
TO
:::

Or

> PTT + Cantrip

:::row{variant=PILE}
LED
IU
LP
Tsz
TO
:::

The second example also allows you to hold up {B} from your Swamp to cast a
Thoughtseize before committing Oracle to the stack.

If you are concerned about additional permission from the opponent you could
even consider passing the turn again if you don't feel under pressure. Instead
of using LED you can set up something like this:

> PTT + PTT

:::row{variant=PILE}
Pdt
SW
LP
Pnd
TO
:::

In this example you can draw Predict for turn, play your island and pass again.
At the end of the opponent's turn you can then cast the Predict, targeting
yourself and naming Street Wraith, to draw LP and Ponder. This then allows you
to draw Oracle for your turn and cast it off of Island and LP with double Force
of Will backup (with Preordain and Ponder as your _pitch_ cards). You even have
an additional {B} available to pay for something like Daze. In the event of
trouble prior to the Predict, or to protect the Predict itself, you have the
first Force of Will available.

## Get Started

If you want to discover a bit by yourself before diving into more detailed
chapters, try a couple goldfish games with the following proven list.

::decklist{path=meandeck.ub}

Alternatively, if you're looking into getting the cards here is a functional
budget version:

::decklist{path=meandeck.budget}
