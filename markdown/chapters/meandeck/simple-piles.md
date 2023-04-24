---
authors: angrybacon, Labman13, 7TeenWriters, Doishy
banner: IU
order: 1
title: Simple Piles
---

## Table of Contents

## Preamble

The goal of all Magic decks is to win the game. :card[Doomsday] aims to do so by
casting its namesake card and constructing a pile of 5 cards tailored to the
current game state. This version of the deck will almost always try to use these
5 cards to win via :card[Thassa's Oracle].

## Pile Construction Steps

As described in the last chapter, a pile in this context is what we use to
describe the stack of five cards that comprise your library after the
resolution of Doomsday. This is terminology that will be used throughout the
Wiki.

There are three steps that need to occur to enable you to win (most of the time)

1. Resolve Doomsday
1. Draw into your pile enough so that the Oracle's trigger can win you the game
1. Resolve Thassa's Oracle

:::row{variant=CENTERED}
DD
Pnd
TO
:::

Of these steps, we will provide additional focus on how to achieve steps 2.
and 3. as these are the steps that are unique to the Doomsday archetype.
Other decks like Omnitell have similar transferable skills in order to resolve a
specific key spell however it is the pile construction that is often the
trickiest element of playing the deck for newer players of the archetype.

:::row{variant=CENTERED}
Con
SW
:::

The first consideration to make is how you will _dig_ into the pile. We will use
the phrase _dig_ to mean to initially draw into the five cards you have stacked
with Doomsday.

The most common way to _dig_ into your pile is via a _cantrip_ effect. This is a
spell or ability which draws a card upon resolution. Typically this is provided
by one of the commonly played {U} filter effects like :card[Ponder] or a free
cycle effect like :card[Street Wraith]. If you are not under pressure you can
also simply pass the turn to the opposing player and use your next turn's draw
step in order to _dig_ into the pile. When this is performed it is simply
known as a _pass-the-turn pile_ or _PTT pile_.

Once you have decided what method you will _dig_ into your pile with, you need
to work out how you are going to get through enough cards that the trigger from
:card[Thassa's Oracle] will win you the game. Sometimes this means having up to
two cards left in your library on its resolution, other times it means needing
to have no cards left in your library on resolution. The former is known as an
_imperfect pile_ and the latter a _perfect pile_. An _imperfect pile_ is named
as such because if your opponent is able to remove the Oracle from play prior to
resolution of its trigger (thus reducing your devotion to {U}) then you will not
win the game.

This chapter will present a couple of very simple pile concepts to try out. It
will often be the case that none of the piles presented here may be suitable to
use in your games. Additionally what your opponent has in hand and in play or is
doing can impact their efficacy however they are here to help present the key
concepts and are all simple to perform making them perfect when first starting
out. Some may involve cards that you do not want to have in your decklist. Some
may help inform you what cards you do want to include in your decklist. To make
creating a pile tailored to a specific gamestate easier, you can start with one
of these example piles and then adapt it to the situation and the specific cards
you might need to beat.

## Single Cantrip Draw 3 Piles

> {U}{U} + Cantrip

:::row{variant=PILE}
IU
LP
LP
SW
TO
:::

This is a very simple pile that results in achieving a _perfect pile_. You are
able to cast Thassa's Oracle with 0 cards remaining in your library.

1. Use your cantrip to draw into the pile, draw Ideas Unbound
1. Cast Ideas Unbound, draw Lotus Petal x2 and Street Wraith
1. Cast both Lotus Petals and crack both for {U}
1. Cycle Street Wraith, draw Thassa's Oracle
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

In Legacy there are very few cards that allow you to draw 3 cards for only 2
mana but :card[Ideas Unbound] is one of them. You can easily start to substitute
cards in the pile for other options if your resources allow it which can then
help to play around interaction.

> {U}{U} + Cantrip + Land Drop Available

:::row{variant=PILE}
IU
LP
CoS
SW
TO
:::

This is the same pile we saw above but we can incorporate a :card[Cavern of
Souls] into it which means, if they don't counter the :card[Lotus Petal] then
you can cast an uncounterable Oracle this turn. If they do counter the Petal,
you can play Cavern (Naming Merfolk or Wizard) and pass the turn, discarding the
:card[Street Wraith], to then naturally draw and cast the uncounterable Oracle
on your next turn without risking discarding it to the delayed trigger of Ideas
Unbound. The steps otherwise are the same:

1. Use your cantrip to draw into the pile, draw Ideas Unbound
1. Cast Ideas Unbound, draw Lotus Petal x2 and Street Wraith
1. Cast Lotus Petal and crack for {U}
1. Play Cavern of Souls, name either Merfolk or Wizard
1. Cycle Street Wraith, draw Thassa's Oracle
1. Cast an uncounterable Thassa's Oracle and win the game with 0 cards left in
   your deck

For piles using an effect that draws 3 cards, the order that you stack the 3
cards you intend to draw may not matter however sometimes it may be the case
that putting them in a specific order, especially if the draw 3 effect is
countered, can be beneficial. This will be discussed more in a later chapter.

## Single Cantrip Draw 2 Piles

> {1}{B} + Cantrip

:::row{variant=PILE}
NW
LED
SW
SW
TO
:::

This pile is also a very simple way to achive a _perfect pile_ however, because
we are unable to draw enough cards to get enough mana and Oracle in hand using
Lotus Petal, we need to get a bit more creative.

Let's run through it:

1. Use your cantrip to draw into the pile, draw Night's Whisper
1. Cast Night's Whisper, draw LED and Street Wraith
1. Cast LED
1. Cycle Street Wraith, hold priority and crack LED for {U}{U}{U}, draw SW
1. Cycle Street Wraith, draw Thassa's Oracle
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

Here the key thing to remember is that you can use a cycler effect and
:card[LED] to obtain the required mana and draw to be able to cast Oracle. Let's
have a look at another example using a different draw 2 effect. This one may be
better if you find your life total being pressured.

> {1}{U} + Cantrip

:::row{variant=PILE}
Pdt
Pnd
LED
SW
TO
:::

This is very similar to the example above but, due to the effect of
:card[Predict], we get to save some life by not having to cycle a second Street
Wraith.

1. Use your cantrip to draw into the pile, draw Predict
1. Cast Predict target yourself, name Ponder, mill Ponder, draw LED and Street
   Wraith
1. Cast LED
1. Cycle Street Wraith, hold priority and crack LED for {U}{U}{U}, draw TO
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

This type of pile can be used with any sort of effect that allows you to draw
2 cards. We can also mimic this in another manner.

## Double Cantrip Piles

> Cantrip + Cantrip

:::row{variant=PILE}
LED
IU
LP
TO
PoN
:::

If you find yourself constrained on the mana to cast both a cantrip, and one of
your two mana draw spells but have an additional, useable cantrip in hand then
you can construct what is known as a _double cantrip_ pile. You use the first
cantrip to draw the LED. Cast it and in response to the second cantrip, _crack_
the LED for {U}{U}{U}. This will then allow you to draw into the draw spell and
cast it to draw into Oracle and the LP required to cast it.

1. Use your first cantrip to draw into the pile, draw LED
1. Cast LED
1. Cast your second cantrip, hold priority and crack LED for {U}{U}{U}, draw
   Ideas Unbound
1. Cast Ideas Unbound, draw Petal, Oracle and Pact
1. Cast Lotus Petal and crack for {U}
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

Here's another example:

> Cantrip + Cantrip

:::row{variant=PILE}
LED
Con
Pnd
SW
TO
:::

1. Use your first cantrip to draw into the pile, draw LED
1. Cast LED
1. Cast your second cantrip, hold priority and crack LED for {U}{U}{U}, draw
   Consider
1. Cast Consider, surveil away Ponder, draw Street Wraith
1. Cycle Street Wraith, draw Thassa's Oracle
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

In one of those examples above we have included a suggestion where you can
include protection within the pile in the form of :card[Pact of Negation]. If
you have the available mana to include discard it may help you against
opponents who are either trying to slow roll their permission spells or who are
holding something like :card[Stifle].

Any pile that uses :card[LED] has an inherent weakness where you are unable to
hold anything in hand and these are generally for when you know they don't have
any viable interaction or you are unable to take things slower.

We also get to be introduced to one of the more powerful cantrips of the deck:
:card[Consider].

## Deep Analysis Piles

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

Let's walk through it:

1. Cast Consider, surveil Deep Analysis, draw LED
1. Cast LED, crack LED for {U}{U}{U}
1. Cast Deep Analysis for its Flashback cost target yourself, draw Street Wraith
   and Petal
1. Cast Lotus Petal, crack for {U}
1. Cycle Street Wraith, draw Thassa's Oracle
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

Similarly, you can replace the Consider in hand with any cantrip effect.

> {U} + Cantrip

:::row{variant=PILE}
Consider
DA
LED
LP
TO
:::

1. Cantrip to draw into your pile, draw Consider
1. Cast Consider, surveil Deep Analysis, draw LED
1. Cast LED, crack LED for {U}{U}{U}
1. Cast Deep Analysis for its Flashback cost target yourself, draw Lotus Petal
   and Oracle
1. Cast Lotus Petal, crack for {U}
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

You can also interchange other requirements depending on what you have in hand.
If you have :card[Deep Analysis] in hand for example you can cantrip into the
LED first and just treat it like any other draw 2 pile.

## Generic Cantrip Piles

There are some circumstances where maybe you have decided the mutliple draw
spells are not good enough to include in your decklist or maybe you have pitched
your preferred one to a :card[FoW]. There are still plenty of options you can
explore in making piles without them.

Let's look at one of the simplest.

> {U}{U} + Cantrip

:::row{variant=PILE}
SW
SW
EoA
EoA
TO
:::

This is a basic as you can get and is just as mana efficient as the first
pile presented in this chapter. It does have the same weakness in that it
doesn't allow you to play around any interaction but it can have its useful
moments. Use sparingly as it is heavy in both life investment and lands
investment which, if you are able to use something like a Ponder to save on
either, might be worthwhile.

1. Cantrip to draw into your pile, draw Street Wraith
1. Cycle Street Wraith, draw Street Wraith
1. Cycle Street Wraith, draw Edge of Autumn
1. Cycle Edge of Autumn, draw Edge of Autumn
1. Cycle Edge of Autumn, draw Thassa's Oracle
1. Cast Thassa's Oracle and win the game with 0 cards left in your deck

You can of course play around with different cantrips if you have extra mana
with Consider being one of the more powerful ones in terms of being able to
_dig_ through your pile.

## Next Steps

In the next chapter we shall start to look at the use of Brainstorm as a tool
in our kit.
