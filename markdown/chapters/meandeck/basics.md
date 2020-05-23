---
authors: angrybacon, Labman13, Doishy
order: 0
title: The Basics
---

This section explains the basic Doomsday piles that attempt to end the game
directly with a {{Thassa's Oracle}} trigger. While older versions of Meandeck
used {{Laboratory Maniac}} as the primary win-condition, the introduction of TO
allows us to build piles that are more streamlined than ever.

A *pile* in this context is what we use to describe the stack of five cards that
comprise your library after the resolution of Doomsday.

As a general rule, in order to win you need to:

1. Resolve Doomsday
1. Draw into your pile
1. Consume enough cards out of the pile so that TO's trigger wins you the game

Often enough, steps 2 and 3 go together by using a *cantrip* effect. This is
typically a draw spell like Preordain or a free cycle effect like Street Wraith,
which helps *dig* into the pile. This can be done in a single turn or spread
over multiple turns, utilising your draw step as a way to *dig* into the pile.

## Single Cantrip + Predict Pile

> {B}{B}{B} + {1}{U} + Cantrip

<row variant="pile">{{!Pdt}} {{!Pnd}} {{!LED}} {{!SW}} {{!TO}}</row>

Post-Doomsday, pick these 5 cards and form a pile with them. Draw into the
Predict, either the same turn or by passing the turn to your opponent. Target
yourself with Predict and name whatever you put in second position in order to
draw both SW and LED (Ponder in the example displayed above). Play the LED and
cycle SW whilst retaining priority. This lets you crack the LED for {U}{U}{U}
and draw the TO for the win.

## Single Cantrip + Ideas Unbound Pile

> {B}{B}{B} + {U}{U} + Cantrip

<row variant="pile">{{!IU}} {{!LP}} {{!LP}} {{!SW}} {{!TO}}</row>

Ideas unbound presents a similar method for the same total mana cost however
does present one net additional card in hand. For the example above, this is
advantageous if you need to hold up countermagic as it does not require the use
of LED to generate the mana for Oracle.

## Double Cantrip Pile

> {B}{B}{B} + Cantrip + Cantrip

<row variant="pile">{{!LED}} {{!Pdt}} {{!SW}} {{!LP}} {{!TO}}</row>

<row variant="pile">{{!LED}} {{!IU}} {{!LP}} {{!Daze|NEM}} {{!TO}}</row>

If you find yourself constrained on the mana to cast both a cantrip, and one of
your two mana draw spells but have an additional cantrip in hand then you can
construct what is known as a *double cantrip* pile. You use the first cantrip to
draw the LED. Cast it and in response to the second cantrip, *crack* the LED for
{U}{U}{U}. This will then allow you to draw into the two mana draw spell and
cast it to then draw into Oracle and the LP required for the second {U} for it.

In one of those examples above we have included a suggestion of where you can
include protection slots within the pile. If you have the available mana it may
help you against opponent's who are either trying to slow roll their permission
spells or who are holding something like {{Stifle}} up.

## Piles not using Predict or Ideas Unbound

In the event that your draw spell(s) gets exiled, usually by pitching them to
Force of Will or by your opponent's actions, you need another way of drawing
into your pile. With enough initial mana regular cantrips and cyclers will do
just fine.

If short on mana and LED becomes necessary, you can replicate the *double
cantrip* piles above once again using the first cantrip to draw into LED, and
the second cantrip to dig deeper into your pile while cracking the LED for mana.

> {B}{B}{B} + Cantrip + Cantrip

<row variant="pile">{{!LED}} {{!SW}} {{!EoA}} {{!Pnd}} {{!TO}}</row>

The above pile is pretty simplistic but shows that sometimes the simplest route
is the most effective one. With additional cantrips you can even include
protection slots within the pile.

For any of the above examples you can reduce the cost drastically by using the
free cyclers {{Street Wraith}} and/or {{Edge of Autumn}}. There are also some
interesting tricks we can utilise where the card Brainstorm is one of the
cantrips within our hand however we will cover those in another chapter.

## Passing the turn

A *pass the turn pile* or PTT pile is simply one where, instead of having a
cantrip to draw into the pile in hand, you utilise your draw for the turn
instead. There are many reasons why passing the turn might be advantageous or
necessary based on the resources available to you.

Take the following example:

> Opening hand (7)  
> Game 1  
> On the play

<row variant="hand">{{!DR}} {{!DD}} {{!FoW}} {{!FoW}} {{!S|RAV}} {{!I|RAV}} {{!Pre}}</row>

Here we have a great example of what looks to be a 'combo ready hand' however we
cannot actually go off in the same turn with it. Even if we were to wait one
more turn we still wouldn't have the guaranteed win unless we draw well and our
opponent could play some interactive piece that punishes us for waiting.

Given we have some protection in hand already, it is probably best to *jam* DR
into DD off of the swamp and build something like what we have already seen in
the examples above:

<row variant="pile">{{!Pdt}} {{!SW}} {{!LED}} {{!EoA}} {{!TO}}</row>

Or

<row variant="pile">{{!LED}} {{!IU}} {{!LP}} {{!Tsz}} {{!TO}}</row>

The first example is a *Single Cantrip + Predict* example and the second is a
*Double Cantrip* example which also allows you to hold up {B} from your swamp to
cast a Thoughtseize before committing Oracle to the stack.

If you are concerned about additional permission from the opponent you could
even consider passing the turn again if you don't feel under pressure. Instead
of using LED you can set up something like this:

<row variant="pile">{{!Pdt}} {{!SW}} {{!LP}} {{!Pnd}} {{!TO}}</row>

In this example you can draw Predict for turn, play your island and pass again.
At the end of the opponent's turn you can then cast the Predict, targeting
yourself and naming Street Wraith, to draw LP and Ponder. This then allows you
to draw Oracle for your turn and cast it off of Island and LP with double Force
of Will backup (with Preordain / Ponder as your *pitch* cards). You even have an
additional {B} available to pay for something like Daze. In the event of trouble
prior to the Predict, or to protect the Predict itself, you have the first Force
of Will available.

## Get Started

If you want to discover a bit by yourself before diving into more detailed
chapters, try a couple goldfish games with the following proven list.

<deck path="meandeck.ubw.txt" />
