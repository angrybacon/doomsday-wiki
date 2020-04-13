---
authors: angrybacon, Labman13, Doishy
title: Playing Around Interaction
---

The trick with Meandeck piles usually isn't the inability to play through
interaction from an opponent. On the contrary, Meandeck can build piles that are
quite resilient however, one of the pillars of Meandeck mastery is choosing
which interaction to focus on beating with each pile you build. There are common
cards that you will face quite often which are easy to consider and other, more
rogue cards, that you may have to be ready to face at some point.

We will consider the following types of interaction for this section:

1. Removal
1. Countermagic
1. Permanent Based Interaction
1. Shuffle Effects
1. The Kitchen Sink (Everything Else)

## 1. Playing Around Removal

### Cheating on Devotion

The first key point to state is when removal actualy matters. Thassa's Oracle
has some key text on it that states the following:

> *If X is greater than or equal to the number of cards in your library, you win
> the game.*

This means that even in the face of a removal spell you can still win if the
trigger resolves assuming you have 0 cards left in your library. The only time
removal matters is when you have cards left within your library. If an opponent
tries to remove the Oracle at that point, assuming you have no additional
Devotion to {{U}}, you will not be able to win off of the trigger.

The main counter to this is of course to try and ensure you always leave 0 cards
left in your deck once the Oracle trigger will resolve. Another way is to
potentially try a *bait pile* which tries to go off in one turn but has the
option to wait another. This can be especially useful if you are playing
multiple Oracles. Let us take this example from the Brainstorm chapter:

> {{BBB}} + Brainstorm + Thassa's Oracle + X

<row variant="pile">{{!LED}} {{!SW}} {{!BS}} {{!EoA}} {{!TO}}</row>

1. Cast Brainstorm and put back Oracle then your Cantrip on top.
1. Cast LED and LP, cycle SW cracking LED for {{UUU}} and draw the Cantrip.
1. Cast the Cantrip and arrange your library so that it is (EoA, TO, TO)
1. Draw Edge, Cycle Edge and draw Oracle.
1. Cast Oracle to (hopefully) win.
1. If they have removal, pass the turn and try to cast Oracle again.

This example is good if you suspect removal but are not under too much pressure
where you would not survive another turn. You can try and *go off* with a backup
Oracle in the deck the turn after.

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
Baleful Strix, Counterbalance, Snapcaster Mage or even Teferi, Time Raveler are
a few examples.

### Thinning with Fetchlands

Another trick you can do, to help achieve a library of 0 cards for your Oracle
trigger, is this: With an active fetchland in play as you resolve Doomsday, or
sometimes by putting both a fetchland and a fetch'able land inside the pile, you
can effectively thin further down the size of your library as you move towards
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

When trying to resolve Doomsday, a lot of people will try and fight over the
Doomsday itself however there are some circumstances where you should try and
consider the possibility of having to face countermagic after you have built
your pile. Examples may include where you have gone for an aggressive turn 1
pile on the play or where your opponent thinks they can get you by countering
Oracle and thereby leaving you stuck with no cards left in the deck and a lethal
draw step looming. Thankfully there are a number of ways and means to play
around / punish a resolved Doomsday in the face of countermagic.

### Proactive Disruption

You can utilise your proactive disruption spells like Thoughtseize or Veil of
Summer at the start of your turn. Consider the following scenario where you have
cast Doomsday on turn 1 for a PTT pile in the face of a known {{U}} deck and it
has resolved (from the Basics chapter):

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
1. Play Island, cast Brainstorm with Island, and put back Force and Preordain on
   top
1. Cast Thoughtseize to take away any potential interaction
1. Cycle EoA cracking LED for {{UUU}} and draw Preordain
1. Scry the Force of Will to the bottom, draw Oracle
1. Cast Oracle for the win

Here we have taken some of the concepts learnt in using Brainstorm and applied
them to a scenario whereby before, we had not considered facing interaction
fully. You can do a similar scenario where you have led off of Bayou with Veil
of Summer instead.

<row variant="pile">{{!BS}} {{!VoS}} {{!LED}} {{!EoA}} {{!TO}}</row>

If they cast a spell, such as a Brainstorm, in response to the Veil, you have a
chance to crack LED after Brainstorm has resolved and priority passes back to
you but before Veil resolves to generate the mana for Preordain. If you want to
try and get really tricky and wish to assume they will respond with something to
the Veil you can replace the Preordain and then the Force on top and use the EoA
to cycle into the Force of Will (Pitching the Second FoW) to counter any
response to the Veil which will then allow you to crack LED into Preordain. This
is obviously a risky line if they do not respond to the Veil as it leaves you
having to pass the turn again with Force backup available only prior to trying
to crack LED.

### Reactive Disruption

For Legacy, reactive disruption tends to be centred around countermagic and
Meandeck is no different. A lot of the consideration that comes from using
reactive protection within piles generally boils down to 2 points:

- Having enough resources to allow the casting of countermagic in your pile
- Not having to crack LED to achieve the win

Resources in this context can mean mana, cards in hand to pitch to Force of Will
or simply just raw cards in total. We can have a look at a number of options
that are run in lists for countermagic choices and how they may effect your pile
building options.

The greatest tool in allowing the use of countermagic in piles is Ideas Unbound.
The extra card drawn can allow a lot of flexibility in keeping up countermagic.

Consider the following:

<row variant="hand">{{!DR}} {{!DD}} {{!FoW}} {{!FoW}} {{!Underground Sea}} {{!Island}} {{!Pre}}</row>

Once again we are taking our PTT example but this time we are assuming we are
not playing against a deck running Wasteland effects. Because of this we can
guarantee to have UU available on our turn. As a result we can build a pile like
so:

<row variant="pile">{{!IU}} {{!LP}} {{!LP}} {{!EoA}} {{!TO}}</row>

This pile allows us to simply cast IU and play out Oracle without ever needing
to *drop shields* of the two Forces in hand. It is also resilient to opposing
discard as they can only take 1 Force and there is still a Preordain to pitch
for the other.

In an alternative scenario if you were to face similar, but with an additional
{{U}} available, you could build the same thing but with an additional piece of
interaction such as Daze or simply a second {{U}} card to allow you to cast
Force of Will twice if they try and fight over the Oracle.

### Other Tools Available

There are some key cards that may be used to help work around traditional
countermagic. Cavern of Souls is an easy fit into the Meandeck gameplan and, if
a land drop is available, can easily slot into some of the more *standard*
piles.

> {{BBB}} + Brainstorm + X

<row variant="pile">{{!Pd}} {{!LED}} {{!EoA}} {{!TO}} {{!Cavern of Souls}}</row>

You should recognise the above as a simplified Brainstorm pile. In this we have
simply swapped out a Lotus Petal with Cavern. This severely punishes anyone
trying to wait on countering the Oracle by letting the rest of the spells
beforehand resolve.

Likewise it can slot into most IU piles too.

> {{BBB}} + {{UU}} + Cantrip

<row variant="pile">{{!IU}} {{!LP}} {{!Cavern of Souls}} {{!EoA}} {{!TO}}</row>

Teferi, Time Raveler is another tool that can be used to help prevent
countermagic however it is expensive to include in piles. It might be suitable
for a PTT pile in the mid to late game. The in-built draw effect can help access
your pile and, when combined with Astrolabe, can function as pseudo draw 2 or 3.
You can use this draw to replace a cantrip slot in any of the piles already
explained.

## 3. Playing Around / Through Permanent Based Interaction

### Chalice of the Void

Chalice is a Legacy staple that is featured in a number of decks. It seeks to
generate card advantage by (hopefully) countering a number of cards or
preventing the casting of cards of a certain cmc. Normally Chalice is set to X =
1 most of the time which, although can be a heavy detriment to a deck comprised
of predominantly 1 cost cards, does not stop the deck winning the game.

Although it certainly is convenient trying to get {{BBB}} from Dark Ritual, you
can easily just cast it from lands. It is perfectly fine getting to turn three
without having fetched and just finding 3 black sources to cast Doomsday. From
that point you don't have to cast a single 1 mana spell.

<row variant="pile">{{!IU}} {{!LP}} {{!LP}} {{!EoA}} {{!TO}}</row>

<row variant="pile">{{!Predict}} {{!SW}} {{!LED}} {{!EoA}} {{!TO}}</row>

Both of the above examples are all comprised of 0 / 2 drops and free cycling
effects all of which can circumnavigate the limitations Chalice creates. If
playing against a known Chalice deck, simply going turn 1 Doomsday off of DR
with another land in hand is pretty safe given you can ignore the interaction
(at least where Chalice is concerned). The above are pretty cheap too
representing post Doomsday costs of {{UU}} and {{1U}} respectively.

Chalice is not limited to being set on 1. Sometimes an opponent will want to
deploy a threat plus disruption on turn 1 so might lead with Chalice X = 0 or
may play a Chalice X = 2 in the late game. For X = 0 this is fine so long as you
have been making land drops though the game or, at worst, allows you to put
lands into the pile itself. If you have Arcum's Astrolabe out you can also use
Dark Ritual as a *mana boost* that filters into the {{U}} needed for Oracle.

> {{BBB}} + {{1UU}} + Cantrip

<row variant="pile">{{!Predict}} {{!SW}} {{!Island}} {{!EoA}} {{!TO}}</row>

If X = 2 then you can build something like a Brainstorm pile that only uses your
1 mana cantrips alongside something like Cavern of Souls to get through the
Chalice. Alternatively the use of Unearth can help get around the need for a 2
drop using LED as a discard outlet for Oracle instead of *milling* with Predict.

If you are playing Veil of Summer against Chalice on 0 or 2 then simply casting
Veil, or leading a pile with it, will allow your spells to resolve through the
Chalice. Tis is especially useful for BUG variants.

Post-board for all of the above you can also start adding removal into your
piles as the top card in order to try and facilitate the win. Consider the below
PTT example against a Chalice of the Void.

> {{BG}} + {{U}} + Brainstorm + X (Post Doomsday)

<row variant="pile">{{!Abrupt Decay}} {{!LED}} {{!EoA}} {{!Pn}} {{!TO}}</row>

Although we are talking predominantly about Chalice of the Void, the same
information can apply to facing against Counterbalance (Veil still gets around
the Counterbalance trigger) or even, to some extent, Sanctum Prelate. These
cards both also seek to cut you off a key cost of card however with some cards
like Prelate, it is very likely to be set at 'X' = 3 to prevent the casting of
Doomsday in the first place.

### Taxing Effects

When discussing these effects we are talking about things like Thalia, Guardian
of Thraben and Thorn of Amethyst. These generally do not actively stop you
*going off* and winning the game however they do present potential for a lot of
delay on reaching that combo turn, especially if being placed under pressure.
The piles themselves can be adapted, using the free cyclers, to try and become
as mana efficient as possible. This is especially good when knowing you don't
face removal as often the Oracle itself is not taxed:

<row variant="pile">{{!SW}} {{!EoA}} {{!TO}} {{!DD}} {{!DD}}</row>

In the above example you can simply cycle the first 2 cards and then cast Oracle
for {{UU}}. The 2 Doomsdays are just placeholders as, in theory, you will not
need them to achieve the win. Obviously, when facing known removal you would
have to adapt this further but quite often the tax effect can also prevent the
removal being cast as well so bear that in mind.

### Spell Restrictors

Spell restrictors are things that place a limitation of how many spells you may
be able to cast in a given turn. Cards like Ethersworn Canonist or Deafening
Silence both achieve this well. Just like the limitations with the tax effects,
these generally only seek to slow you down rather than prevent a full game win
and both can be played around.

For example, playing against Deafening Silence you can do a PTT pile similar to
the one stated against taxing effects ensuring that you only ever cast one
spell. The cyclers can be replaced with another cantrip if need be to increase
the pile cost by {{1}}, {{U}} or {{S}}.

### Draw Restrictors

This category is one of the hardest to fight through effectively as they cause
both delay and prevention of most of the piles we want to use. Leovold, Emissary
of Trest, Narset, Parter of Veils and Spirit of the Labrynth all fall under this
heading. The easiest way to deal with them is of course removal however that is
not always viable, especially in game 1. Another way is to simply pass the turn
a number of times using the sorcery speed cantrips on your turn and the instant
speed free cyclers on the opponent's turn. Predict is quite useful in this
scenario as, despite costing {{1U}} it allows you to *burn through* 2 cards from
the stack. Something like the following may be useful facing an opposing Narset
for example (spread over multiple turns):

<row variant="pile">{{!Pn}} {{!Pd}} {{!EoA}} {{!Pn}} {{!TO}}</row>

One key thing to note with these cards involves Teferi, Time Raveler's {{-3}}
ability. If use the ability on a Leovold, you *will* get to draw the card
afterwards. This can allow you to remove the disruption and *crack* into the
pile at the same time.

### Search Restrictors

These are cards that, rather than disrupt the Doomsday pile itself, actively
prevent you building it in the first place. To understand what is being talk
about; please read the below Oracle text of Doomsday:

> Search your library and graveyard for five cards and exile the rest.  
> Put the chosen cards on top of your library in any order.  
> You lose half your life, rounded up.

The first line is the relevant one. When resolving Doomsday you have to search
two zones to construct your pile. Cards like Ashiok, Dream Render, Leonin
Arbiter and Aven Mindcensor can all prevent you from searching the library and
cards like Rest in Peace can limit what is available to find in the graveyard.
Out of these two the former is certainly the most detrimental as that can cut
you off from the majority of your cards. So long as you are mindful of these you
can however pull a neat trick.

If you have Oracle in hand, you can cast Doomsday without being able to search
your library. You still need to find 5 cards from your graveyard (if able) but,
assuming those are all cantrips and fetchlands, you can still build a
serviceable pile from them. Even better if your graveyard is small or
non-existent; you can cast Doomsday and set your library of 0 cards and then
cast Oracle to win.

## 4. Playing Around Shuffle Effects

Shuffle effects can be one annoyance to face when building a pile that would
otherwise have perfect ordering to it. There are some examples that you could
consider needing to play around like Field of Ruin however this is a bit too
niche to consider is most matches. The primary concern is in fact a card that is
very prevalent in Legacy; Surgical Extraction.

Upon sucessfully resolving a Doomsday, assuming no cards like Leyline of the
Void are present, there will be one card in your graveyard and that will be the
copy of Doomsday itself. This is a prime target for an opposing Surgical in an
attempt to mess up the ordering of a Doomsday pile as you try and *go off* in
one turn. When the surgical is used can depend on the opponent but if they wait
in response to a Predict for example it can really mess things up.

You can build piles that are either resilient to Surgical, giving decent odds of
suceeding despite the shuffle, or even immune to it. A big part of when the
opponent casts the Surgical can depend on what spell you are using to draw into
a pile. Let us take the following scenario:

> {{BBB}} + {{UU}} + Cantrip

<row variant="pile">{{!IU}} {{!LP}} {{!LP}} {{!EoA}} {{!TO}}</row>

If the Cantrip used to *crack* into the pile is something like an Astrolabe or a
Street Wraith then the opponent is likely to Surgical right away meaning you
have a 20% chance to draw into the desired Ideas Unbound or a 5% chance to draw
Edge to then Cycle immediately into Ideas Unbound (25% sucess rate chance in
total). If using another cantrip, the opponent still may Surgical however the
odds of you finding what you need (IU) are dramatically increased. See below a
table that shows the percentage of successfully finding either the IU itself or
Edge of Autumn that then cycles into IU.

|                | Street Wraith | Ponder | Brainstorm | Preordain |
| :------------: | :-----------: | :----: | :--------: | :-------: |
| Ignore Removal | 25%           | 70%    | 60%        | 70%       |
| Beat Removal   | 20%           | 53%    | 45%        | 66%       |

If your opponent then waits on the Surgical for after you already have the
ability to draw 3 of the 4 remaining cards in the deck and are only punished if
you have Edge as the bottom card of the pile and the opponent has removal for
Oracle with no additional devotion present (assuming you don't have the luxury
to pass the turn). Calculating the percentages for other things like Brainstorm
piles is slightly harder, especially when you cannot predict when the opponent
will try to use their Surgical (if at all).

One cool trick you can use is to try and bait them into using a known Surgical
effect. By placing additional copies of Doomsday into your pile, if your
opponent tries to extract them, you can *shrink* your library by that amount.
This again assumes they will Surgical at a time you want but it is a possibility
to be considered.

> {{BBB}} + {{UU}} + Cantrip

<row variant="pile">{{!SW}} {{!Edge}} {{!TO}} {{!DD}} {{!DD}}</row>

Here you have a pile where, if they Surgical in response to the cantrip effect
on Doomsday, you will have a deterministic win (using one of Ponder, Brainstorm
or Preordain) as you can ensure you are able to see all the cards within the
deck and not die to drawing too deep with Brainstorm. Even if they do not
Surgical you still can just cycle twice and play Oracle with a library of 2
cards.

## 5. Everything Else to Consider

As you get more matches under your belt with the deck you will start to face
more an more interaction that might seem a surprise or unexpected. I will try
and list some of the ones that are relatively common to try and beat and will
try to provide examples for some of those on how to consider playing around
them. This is not an exhaustive list however and you will eventually run across
an unexpected interaction you may not have considered before. If something does
*get you* then stay calm, take it as learning and move on.

### Grindstone

This is a consideration when facing any Painter variant. You can find yourself
in a situation whereby your opponent may have an active Grindstone and the mana
to activate it but you otherwise have a window to try and win. Just like with
Surgical Extraction it is difficult to know if and/or when the opponent may
try to activate the Grindstone but it is possible to play around.

>{{BBB}} + {{UU}} to {{UUUU}} + Cantrip

<row variant="pile">{{!Pn}} {{!Pn}} {{!SW}} {{!EoA}} {{!TO}}</row>

For the example above, if they Grindstone when digging into the pile you will
*mill* Ponder and Ponder and then also Wraith and Edge and draw TO to be able to
cast it with 0 cards in your library. If you can draw into Ponder, you cast
Ponder and again, if they go to activate Grindstone, you will *mill* Ponder and
Street Wraith which allows you to draw Edge and cycle into Oracle. If you are
allowed to access the second Ponder then, assuming they do not activate
Grindstone here you can directly grab Oracle and cast it with 2 cards left in
your library and a devotion of 2.

This is just one example in a single set of potential circumstances of course.

### Fireblast

Fireblast is something to be mindful of only in the Burn matchup but it's a good
consideration in line with Lightning bolt to be mindful of your life total. If
you cast Doomsday from 9 life or less you are weak to Fireblast once the
Doomsday resolves and likewise from 7 life or less you are at risk of bolt. You
also have to be mindful of when you can incorporate the use of Street Wraith in
a pile (blocked from 5 life or less) or Force of Will or a fetchland (3 life or
less). Also always be mindful that if you cast Doomsday when on 1 life you will
immediate lose due to the rounding up clause.

### Mindbreak Trap

Mindbreak Trap is a popular tool to beat combo decks and work around Veil of
Summer. If you know or suspect the possibility of facing it then you can either
try to incorporate counter magic into your strategy or build a PTT pile that is
mindful of the spell count. Assuming that you cast Dark Ritual into Doomsday, it
is risky to try and resolve a third spell.

Consider the following:

<row variant="pile">{{!IU}} {{!TS}} {{!LP}} {{!LP}} {{!TO}}</row>

Assuming you had a cantrip ready to *dig* into the pile, you can use it to try
and use it to either preemptively bait the Trap or to enable digging one deeper
so that you can lead on Thoughtseize the next turn.

### Thought Scour / Predict

Thought Scour is not normally a common card in Legacy now that the Underworld
Breach era is gone however it still can show up in rogue brews from time to
time. Predict is a card advantage spell played by both Miracles and Doomsday
pilots. Both Thought Scour and Predict can target any player and so either can
mess up your piles at instant speed, milling a key piece in response to a
cantrip or potentially forcing you to commit unknowing suicide by making your
Ideas Unbound suddenly lethal through decking. You can try to take similar
considerations to when facing Grindstone in either baiting the known spell or
taking a bit more time to play around it.

### Dack Fayden / Jace, the Mind Sculptor / Portent

These only need to be considered when building a Pass the Turn pile. Jace is
likely the most common one to face and is easily beaten by placing an otherwise
innocuous cantrip as the top card. If the opponent *upticks* Jace then they
cannot *hit* an integral piece if it's the second card down and even if they
allow it to stay on top you can still execute the pile without hinderance.

### Vendilion Clique / Kolaghan's Command

Both of these cards tend to come from control shells. Command is likely more
disruptive but can be played around assuming you are able to ensure you have one
additional card in hand than needed. Often this means not being able to utilise
LED however you can otherwise treat it like any other pile where you need to
keep countermagic up. Clique is tricky when trying to utilise cards like Predict
or Ideas Unbound but is relatively superfluous if executing something with just
cantrips. You can also build a pile around it *if* you can predict when the
opponent will use it however that can be tricky.

## Final Thoughts

There are a number of things that you may face and the ability to deal with it
comes from research and practice. Remember to always consider the matchup in
playing around Wasteland, opposing Thoughtseize effects and the like prior to
the combo to give yourself the best chance to enact the combo. Consider whether
speed or resilience is the right path given your opponent's deck.
