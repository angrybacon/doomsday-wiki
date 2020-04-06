---
authors: angrybacon, Labman13, Doishy
title: Playing Around Interaction
---

The trick with Meandeck piles usually isn't the inability to play through
interaction from an opponent. On the contrary, Meandeck can build piles that are
quite resilient however, one of the pillars of Meandeck mastery is choosing which
interaction to focus on beating with each pile you build. There are common cards
that you will face quite often which are easy to consider and other, more 
rogue cards, that you may have to be ready to face at some point.

We will consider the following types of interaction for this section:

1. Removal
1. Countermagic
1. Permanent Based Interaction
   1. Chalice
   1. Taxing Effects
   1. Counterbalance
   1. Spell Restrictors
   1. Draw Restrictors
1. Hand attack
1. Land Destruction
1. Mill Effects
1. Shuffle Effects
1. Ignorable Interaction


## 1. Playing Around Removal

**Cheating on Devotion**

The first key point to state is when removal actualy matters. Thassa's Oracle
has some key text on it that states the following:

> *If X is greater than or equal to the number of cards in your library, you win
> the game.*

This means that even in the face of a removal spell you can still win if
the trigger resolves assuming you have 0 cards left in your library. The 
only time removal matters is when you have cards left within your library.
If an opponent tries to remove the Oracle at that point, assuming you have
no additional Devotion to {{U}}, you will not be able to win off of the
trigger. 

The main counter to this is of course to try and ensure you always leave
0 cards left in your deck once the Oracle trigger will resolve. Another
way is to potentially try a *bait pile* which tries to go off in one turn
but has the option to wait another. This can be especially useful if you
are playing multiple Oracles. Let us take this example from the Brainstorm
chapter:

> {{BBB}} + Brainstorm + Thassa's Oracle + X

<row variant="pile">{{!LED}} {{!SW}} {{!BS}} {{!EoA}} {{!TO}}</row>

1. Cast Brainstorm and put back Oracle then your Cantrip on top.
1. Cast LED and LP, cycle SW cracking LED for {{UUU}} and draw the Cantrip.
1. Cast the Cantrip and arrange your library so that it is (EoA, TO, TO)
1. Draw Edge, Cycle Edge and draw Oracle.
1. Cast Oracle to (hopefully) win.
1. If they have removal, pass the turn and try to cast Oracle again.

This example is good if you suspect removal but are not under too much
pressure where you would not survive another turn. You can try and *go off*
with a backup Oracle in the deck the turn after. 

This pile plays around the following:

- Warping Wail
- Unavailability of Predict/Ideas Unbound
- Stifle for the first Oracle
- Removal for both Oracles
- Countermagic for the first Oracle

If your opponent deals with TO with its trigger on the stack, you could be
missing on a couple Devotion to {{U}}. That's why it's important to try and
consume the entirety of your pile before going for it whenever you can,
especially if your opponent is likely to hold removal as you go off.

With enough mana, and other relevant permanents in your deck, you can utitlise
extra potential Devotion to {{U}} to help bolster your effect. Cards like
Baleful Strix, Counterbalance, Snapcaster Mage or even Teferi, Time Raveler
are a few examples.

**Thinning with Fetchlands**

Another trick you can do, to help achieve a library of 0 cards for your Oracle
trigger, is this: With an active fetchland in play as you resolve Doomsday,
or sometimes by putting both a fetchland and a fetch'able land inside the pile, you can
effectively thin further down the size of your library as you move towards
resolving TO.

Consider the following:

> {{BBB}} + {{UU}} + Ponder + Island (Land drop available)

<row variant="pile">{{!BS}} {{!SW}} {{!EoA}} {{!Polluted Delta|ONS}} {{!TO}}</row>

1. Cast Ponder to draw BS
1. Cast BS and put back Island then SW
1. Cycle SW to draw EoA
1. Land Polluted Delta and fetch the Island
1. Cycle SW and play TO with 0 remaining cards


## 2. Playing Around / Through Countermagic

When trying to resolve Doomsday, a lot of people will try and
fight over the Doomsday itself however there are some circumstances
where you should try and consider the possibility of having
to face countermagic after you have built your pile. Examples
may include where you have gone for an aggressive turn 1 pile
on the play or where your opponent thinks they can get you by 
countering Oracle and thereby leaving you stuck with no cards left
in the deck and a lethal draw step looming. Thankfully there are
a number of ways and means to play around / punish a resolved 
Doomsday in the face of countermagic. 


**Proactive Disruption**

You can utilise your proactive disruption spells like Thoughtseize or
Veil of Summer at the start of your turn. Consider the following scenario
where you have cast Doomsday on turn 1 for a PTT pile in the face of 
a known {{U}} deck and it has resolved (from the Basics chapter):

> Opening hand (7)
> Game 1
> On the play

<row variant="hand">{{!DR}} {{!DD}} {{!FoW}} {{!FoW}} {{!Swamp}} {{!Island}} {{!Pre}}</row>

Although we have Force of will in our hand we are wanting to use LED to help us
generate enough mana to cast everything we want. If we use LED our Oracle
becomes exposed thanks to having to discard our Forces. Here is one potential
solution assuming we played Doomsday off of Swamp and Dark Ritual:

<row variant="pile">{{!BS}} {{!TS}} {{!LED}} {{!EoA}} {{!TO}}</row>

1. Draw Brainstorm for turn
1. Play Island, cast Brainstorm with Island, and put back Force and Preordain on top
1. Cast Thoughtseize to take away any potential interaction
1. Cycle EoA cracking LED for {{UUU}} and draw Preordain.
1. Scry the Force of Will to the bottom, draw Oracle.
1. Cast Oracle for the win.

Here we have taken some of the concepts learnt in using Brainstorm and applied them
to a scenario whereby before, we had not considered facing interaction fully. You can
do a similar scenario where you have led off of Bayou with Veil of Summer instead.

<row variant="pile">{{!BS}} {{!VoS}} {{!LED}} {{!EoA}} {{!TO}}</row>

If they cast a spell, such as a Brainstorm, in response to the Veil, you have a 
chance to crack LED after Brainstorm has resolved and priority passes back to you
but before Veil resolves to generate the mana for Preordain. If you want to try and
get really tricky and wish to assume they will respond with something to the Veil you
can replace the Preordain and then the Force on top and use the EoA to cycle into
the Force of Will (Pitching the Second FoW) to counter any response to the Veil which
will then allow you to crack LED into Preordain. This is obviously a risky line if 
they do not respond to the Veil as it leaves you having to pass the turn again 
with Force backup available only prior to trying to crack LED.


**Reactive Disruption**

For Legacy, reactive disruption tends to be centred around countermagic and
Meandeck is no different. A lot of the consideration that comes from using
reactive protection within piles generally boils down to 2 points:

- Having enough resources to allow the casting of countermagic in your pile
- Not having to crack LED to achieve the win

Resources in this context can mean mana, cards in hand to pitch to Force of Will
or simply just raw cards in total. We can have a look at a number of options
that are run in lists for countermagic choices and how they may effect your 
pile building options. 

The greatest tool in allowing the use of countermagic in piles is Ideas Unbound.
The extra card drawn can allow a lot of flexibility in keeping up countermagic. 

Consider the following:

<row variant="hand">{{!DR}} {{!DD}} {{!FoW}} {{!FoW}} {{!Underground Sea}} {{!Island}} {{!Pre}}</row>

Once again we are taking our PTT example but this time we are assuming we are
not playing against a deck running Wasteland effects. Because of this we can guarantee
to have UU available on our turn. As a result we can build a pile like so:

<row variant="pile">{{!IU}} {{!LP}} {{!LP}} {{!EoA}} {{!TO}}</row>

This pile allows us to simply cast IU and play out Oracle without ever needing to
*drop shields* of the two Forces in hand. It is also resilient to opposing discard
as they can only take 1 Force and there is still a Preordain to pitch for the other.

In an alternative scenario if you were to face similar, but with an additional {{U}}
available, you could build the same thing but with an additional piece of interaction
such as Daze or simply a second {{U}} card to allow you to cast Force of Will twice 
if they try and fight over the Oracle. 


**Other tools available**

There are some key cards that may be used to help work around 

## Build Durable Piles

Sometimes you might want to go blind and force through removal with redundancy.
{{Unearth}} is one tool to build some durability against removal but most
notably countermagic. It lets you reanimate the TO when countered or when you
name TO itself to Predict to dig into the pile.

> Ponder, Ponder in hand - {{BBB}} + {{UU}}

<row variant="pile">{{!LED}} {{!Pd}} {{!TO}} {{!Un}} {{!LP}}</row>

At the very least you could put Unearth at the bottom of your pile *just in
case*.

One other way to build redundancy is putting a second copy of Doomsday in your
pile, if anything goes wrong you can always re-cast Doomsday, pay half your life
and try again!

