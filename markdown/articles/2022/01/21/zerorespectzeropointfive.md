---
authors: Doishy
banner: Gitaxian Probe
title: A Decklist Discussion and Sideboard Guide - Doishy's Turbo Zero Respect v0.5
---

## Table of Contents

## Preface
First of all I guess happy new year everyone! 

I hope you're all safe and well going into 2022 xxx

The wiki author team has generally been against the writing of specific sideboard
guides as are often seen across the magic community. Sideboard guides can be
very helpful in allowing players to quickly pick up decks they may have seen from
other pilots that they enjoy or provide a quick starter if they do not have time
to work out the nuances of a deck themselves however The author team believe in a more
"teach a man to fish" approach whereby we encourage people to build their deck and
sideboard from the ground up and work out what works best for each pilot. There
is also a huge amount of potential variation that can be applied to the archetype
these days with lists often changing speed, style, colours and all manner of things
based on pilot experience, preference and metagame.

It's because of this that we present our [sideboard chapter](/chapters/meandeck/sideboard)
as a series of guiding principles instead of a rigid +x/-y format because we cannot
account for every decklist and what might be very common one day could very well become
obsolete the next. Even so, there are definitely advantages to having at least one
example guide if nothing else to try to promote people to write/discover their own
plans. I personally think everyone should have a go at mapping their plans for each
matchup at least once, even if you don't follow it perfectly or change your mind
completely at least you have gone through and worked out each slot and whether it is
justified or not to hold its place and it means you become more aware of the roles
each card has so that you can become flexible vs the unknown.

Because of the demand for it as a one-off article I thought I would provide my own
sideboard guide. This is not a guide I have properly written up before but it
will be a good exercise for me as well to write it. This guide will also try to
explain the reasoning behind some of the decisions and thus discuss both the main
deck configuration and my own style of play alongside it. It very well may not be
super applicable for you because of how you prefer to play (or because no one else
plays my deck) but hopefully it will encourage you to have a go working out your
own plans!

## Biases

The first things I should write about before even presenting the decklist is about my
own playstyle and personal bias towards the deck. These are the core principles behind
why I build it like I do and are based on my own play experience and ideals. It might
be worth before having a go at this yourself to work out some key points
that you feel about your deck so as to understand what you want from it.

#### 1. I like playing combo-control

This one is self explanatory. One of the best things about the current iterations of Doomsday
is I get to run both all my combo staples card:[DR], card:[LED], card:[DD] alongside
things like card:[FoW] with a full cantrip suite to boot! This means I can have
the choice to play the aggressive role (without all that nasty combat maths that
hurts my tiny brain) or pivot to take it slow a bit more until I want to win.
This flexibility is something I value highly.

#### 2. I see Doomsday as a mono {U} deck that happens to require {B}{B}{B}

This one is a funny one and one I have been citing since Oracle was printed.
People often look at me funny when I say this however it is definitely true. The
deck pre-Doomsday relies on being able to cantrip, cast counter magic and do
the things that blue decks like to do. Post-Doomsday all you need are some
draw effects and the ability to make {U}{U}. It's just that awkward bit in the
middle where you need to find {B}{B}{B} to actually cast Doomsday itself (and
on occasion firing off a discard spell). This is why in regards to manabase
I prize {U} over {B} and run a basic Island. It's also why every fetchable
land in my deck has the Island subtype and my fetch configuration is Island
centric.

#### 3. I hate relying on the top of my deck

The games that I lose which annoy me the most are the ones where it has gone
a bit long and I am waiting for "that one card" to win. The worst is when
"that one card" is literally any card with the text "draw a card" on. Often
it's vs UGx control piles and I have Doomsday, mana, protection in abundance
but the gamestate is such where I cannot do a PTT pile so all I need is any
method to dig into the pile post resolution. These are the losses that stick
in my mind even more so than the turn 1 blowouts with card:[Blood Moon] against
Moon Stompy or the "needed to dodge card:[Dz] one time" vs Delver. As a result
I run as many cantrips as I can reasonably fit into the deck whilst still
trying to retain the elements of the "Turbo" style. This is why you will
see some number of card:[Pre] in the deck alongside card:[Con] and the normal
cantrip/cycler suite.

#### 4. I tend to be fast to cast Doomsday, but slow after it resolves

This was something I hadn't thought of before until the lovely Francobolli
pointed it out in response to one of my 
[Youtube video uploads](https://www.youtube.com/watch?v=ZlZ9mnCRFgQ):

> "@Doishy your play style is very much on the aggressive side to 
> cast doomsday and then maybe conservative making the piles. It is good 
> to see both those perspectives.

In this I am trying to slam Doomsday as fast as possible but will often build
a pile that passes 1-3 more turns (sometimes the full five) after it resolves.
This is why I like having Daze, why I run 3 card:[PT] and why I am almost
the complete "Turbo" shell but don't go full ham on cycling effects, 
multiple Considers and why I run card:[CoS] in the main.

#### 5. I am here to disrespect Delver

I have tried in the past to dedicate a lot of sideboard slots for beating
URx Delver decks before and I realised that the games I was winning against
them was because of tight play, a little bit of luck and mostly my main deck
tools. As a result I decided to run no dedicated Delver sideboard slots and
instead just work out a solid plan from the other tools I was using anyways. 
This is the one matchup I pretty much never deviate from my plan on and 
I am happy to take my 30-40% win rate against them where I can. 

#### 6. I like having access to a toolbox

You will notice through the guide I often do not take out card:[Con], card:[DA],
card:[IU], card:[LED] and I almost always leave in 2 cycler effects. This is 
because I like having the options to acces the instant win Deep Analysis pile,
fast card:[BS] piles and resilient Ideas Unbound piles. Even if they seem poor
in a matchup, simply having them available to you I think is important because
they grant you the most flexibility post Doomsday to tailor your pile to your
needs. In all liklihood I should probably cut some number of them more often but
I don't..... :D

#### 7. I am slow to make changes to my deck

I mostly play in paper (and then online when the MTGO all access passes come out).
I will always run a 75 for a few events to get a feel for what I like/do not like
and even then almost only ever change 1-2 cards max and normally from the sideboard.
Like at the time of writing this I am thinking of changing one sideboard card and that
is after about 2 months of playing with the current 75. I think it's important to
truly get a feel for what you are running and to try not to make knee-jerk decisions
based on one set of bad beats or a single event.


## The Decklist

Here is the decklist itself. You can see already some of the construction thoughts that
went into it from what was said above. It's a "Turbo List" so has 3 card:[PTY] in alongside
4 cycling effects to enable swift access to piles. It has card:[Con], card:[DA] and card:[IU]
all in to enable the faster pile building. All lands are Islands so the fetches can be
perfectly spread out for the corner case card:[Pithing Needle] effect naming. There is also
a maindeck card:[Watery Grave] to act as a 5th card:[Underground Sea].
It has 4 card:[LP] to help speed things up and fix mana. It runs the full set of Forces, 
Dazes and has 1 x card:[CoS] and 1 x card:[PoN] for pile building alongside two maindeck 
discard spells as additional protection. It also runs 2 card:[Pre] alongside the normal
cantrip suite as extra slow fitlering.

::decklist{path=2022/01/21/zerorespectzeropointfive}

As you can see the maindeck is entirely {U}/{B} (despite what card:[EoA] pretends). This means
we have a lot of flexibility in being able to add splash colours, if, as and when we need them.
The sideboard is designed to offer flexibility in many matchups with certain tools acting as
silver bullets in others. I like including a splash colour in my sideboard because I personally
see it as a free addition and, at the moment, that splash is {R} however I have done {G} and full
4 Colour before in the past. I have also dabbled with {W} but not in the same shell as this.

The last major change I made to the list was removing a card:[Tropical Island] from the main and
replacing it with the card:[Watery Grave] and taking 2 card:[VoS] from
the side and replacing them with a 2nd card:[Flusterstorm] and 2nd card:[Pyroblast]. From testing, although
I liked having access to {G} and Veil I had faced many instances where Flusterstorm was either
equal to, or better in certain circumstances. I also wanted to try a third blast effect as in
some of the fair blue match ups I was wanting to see them more often. 

### Deeper Sideboard Dive

I will quickly go through the sideboard cards and give a quick summary of their general/expected roles
and the justification for having them.

- 1 card:[Chain of Vapor]
  Catch all permanent answer that is easy on the mana. Helps deal with most things other than Chalice on
  1 and even then most of the time that can be ignored. Can also allow the bouncing of your own Oracle
  to recast in a pinch.
  
- 2 card:[Flusterstorm]
  Shines vs other spell based combo, helps disrupt cheaper interaction and allows us to force our combo
  through opposing protection. A very useful tool for multiple fair and unfair matchups.
  
- 4 card:[FoN]
  Acting as both combo protection from those faster than us and to complement the Chain by preventing things
  like card:[Blood Moon], card:[Chalice of the void], card:[Trinisphere] etc from landing onto the battlefield. 
  A very versatile and mana efficient card. Sometimes can be over-boarded.
  
- 1 card:[Massacre]
  One of the more specialist tools. This helps deal with a myriad of hatebear style creatures in a very mana efficient
  way and can be easily found through casting Doomsday. Normally used in non-{U} fair matchups but occasionally can
  be brought in to fight of card:[Meddling Mage] or similar from fair {U} decks.
  
- 2 card:[Pyroblast]
  Catch all in {U} match ups as protection, disruption and removal. Anyone who plays Legacy knows how effective these can
  be in the right matchup.
  
- 1 card:[Red Elemental Blast]
  It's like Pyroblast but spelt differently. This is here to simply diversify my blast effects for small percentage points
  and niche corner cases (although I have had people Surgical them before!).
  
- 1 card:[Surgical Extraction]
  Part of the anti-graveyard package. This provides soft turn 0 protection against decks looking to abuse the graveyard. Sometimes
  I also look to bring it in for the Mirror.
  
- 1 card:[TO]
  The second Oracle is a very versatile tool. It allows you to pile with two of them giving multiple chances at resolving it and
  allowing you to go up to a devotion of 4 which helps bypass things like card:[Endurance]. It also
  increases your pseudo blue card count for Force pitch purposes by +2 (because you now have 2 cards in the deck eligibile to pitch
  whereas before you could never pitch your lone Oracle). Also (in a pinch) it blocks card:[Ragavan, Nimble Pilferer] really well and
  helps you avoid any accidentally monkey-related exiling.
  
- 1 card:[Tormod's Crypt]
  The second part of my anti-graveyard package. This one is nice as it can just sit in play whilst you get prepped or be added to a pile
  to help defend against various tools like card:[Cephalid Coliseum] whilst you go for the win. It's less precise than Surgical but is 
  a lot more effective.
  
- 1 card:[Volcanic Island]
 Finally it's a land that makes {R}. It helps cast our blast effects. Not much else to say though you could consider to bring it in as
 an additional "bad Island" in matchups where maybe you don't want Cavern.
 
 ## The Actual Sideboard Guide Bit
 
 Here I will list decks in the order that I think of them. I will trying to add cards I would have on my radar that I wish to respect, cards
 on my radar I might respect less and variations to what I might board based on how I am feeling (because I am very inconsistent sometimes).
 Please note this is a snapshot and should not be considered gospel. The presence of SPICE in an opponent's deck can result in variations
 being made if they are needed and you should always try to critical identify whether something seems sensible to you. If you
 don't like an idea written here you don't have to follow it :)

### UR Delver/Grixis Delver/RUG Delver

Respect: None of it. Maybe Monkey...
Disrespect: The rest.
Take out: 1 card:[Dur], 1 card:[Tsz], 1 card:[SW]
Bring in: 2 card:[Flusterstorm], 1 card:[TO]

Try your best. Play around Daze/Monkey/Bolt/Wasteland/Stifle when you can. Don't play around them when you can't. If 
they have Torpor Orb, good for them. They obviously wanted it more. The changes we make are because of card:[Ragavan, Nimble Pilferer]
because us having our own discard hit is devastating. Second Oracle lets you act a bit ore aggressively in pile building
and also acts as a buffer to random instances of having your sole win condition exiled to monkey.


### Death and Taxes

Respect: Deafening Silence, Spirit of the Labrynth, Rishadan Port
Disrespect: Thalia, Archive Trap, Solitude, Mindbreak Trap, Ethersworn Canonist
Take out: 1 card:[Dur], 1 card:[Tsz], 1 card:[SW], 1 card:[CoS], 1 card:[PoN]
Bring in: 1 card:[CoV], 1 card:[Massacre], 2-4 card:[FoN], maybe 1 card:[TO]

Death and Taxes is an interesting deck because in theory they have all the right tools to win, but often
they need multiple of them in one go to actually make it happen. Often card:[Thalia, Guardian of Thraben] is
too slow to do anything and can be ignored, especially post Doomsday. The scary cards are the ones that
tax your mana or life total. card:[Wasteland] and card:[Rishadan Port] can be devastating if having to go
slow so aggressive mulliganing is advised. card:[Kaldra Compleat] is also a house simply because it is
the fastest threat that they have. I have listed card:[Spirit of the Labrynth] as the main card to
respect because post Doomsday it not only slows you down in progressing your pile but also has a feisty
attack of 3 which can quickly knock you down.


### Stompy Decks

Respect: Blood Moon, Trinisphere, Opposition Agent
Disrespect: Chalice (to an extent).
Take out: 1 card:[Dur], 1 card:[Tsz], 1 card:[SW], 2 card:[Preordain], 1 card:[PoN]
Bring in: 4 card:[FoN], 1 card:[TO], 1 card:[CoV]

These matchups can be the easiest wins or the hardest losses and sometimes it is a toss of the dice
based on respective mulligans which can decide it. Cavern stays in because Chalice on 2 ruins your
day otherwise. Try to avoid keeping hands that die to Chalice on 1 unless that hand then can just
win on the next turn. It's a swingy matchup but very winnable.


### Oops all Spells/BR Reanimator

Respect: The fact they are faster than you.
Disrespect: Most of their deck.
Take out: 1 card:[Dur], 1 card:[Tsz], 1 card:[EoA], 2 card:[Preordain], 1 card:[PoN], 1 card:[Island], 1 card:[CoS]
Bring in: 4 card:[FoN], 1 card:[TO], 1 card:[Surgical Extraction], 1 card:[Tormod's Crypt], maybe 1-2 card:[Flusterstorm].

Another swingy set of matchups. Their best hands will beat your best hands. VS Reanimator try to fight their
graveyard enablers like card:[Entomb] or card:[Faithless Looting]. VS Oops fight them however you can. These matchups I 
personally find favourable but again, they can be very swingy.


### Elves

Respect: Allosaurus Shepherd + Endurance
Disrespect: Choke.
Take out: 1 card:[Dur], 1 card:[Tsz], 1 card:[SW], 2 card:[Preordain], 1 card:[PoN]
Bring in: 4 card:[FoN], 1 card:[TO], 1 card:[CoV]

These matchups can be the easiest wins or the hardest losses and sometimes it is a toss of the dice
based on respective mulligans which can decide it. Cavern stays in because Chalice on 2 ruins your
day otherwise. Try to avoid keeping hands that die to Chalice on 1 unless that hand then can just
win on the next turn. It's a swingy matchup but very winnable.
