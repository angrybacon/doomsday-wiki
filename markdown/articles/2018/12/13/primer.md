---
authors: d8dk32
title: Draw4 Primer
---

After the Probe ban, we in the Doomsday Discord lamented our loss and many
declared they would be putting the deck down for the forseeable future. Myself
and a handful of others endeavored to continue casting Doomsdays, and set about
picking up the pieces. The first list that showed any promise basically involved
swapping Probes for Street Wraith, and while that deck felt okay I felt like
there might be something we were missing. I went off the rails a bit, and after
lots of trial and error returned with a list I liked better, one with Infernal
Contracts, extra Rituals, and no Lab Maniac anywhere in the 75. I've been
working to refine the list since then and it feels like its sufficiently
competitve that I wouldn't be completely embarassed to write a primer.

<div deckfile="2018/12/ddft.txt" />

## The Part Where I Predict Some of Your Questions About the List

> Why Infernal Contract?

Cruel Bargain works just as well and a split is probably ideal to dodge
extraction effects.

> No I mean why play Draw4's over Ideas Unbound/Act on Impulse?

One of the things I disliked about previous Doomsday lists is that they had
"dead" cards in them. Ideas Unbound, Act on Impulse, Laboratory Maniac, all
these cards feel bad to draw when not "going off". While they are not completely
useless, Generally drawing them feels about the same as skipping your draw step.
So my main motivation with this list was to attempt the reduce the number of
"dead" cards, preferably all the way to 0. A Draw4 is powerful card advantage
against decks that don't pressure your life total, a way to recover from
discard, a decent bait spell for countermagic, and a functional storm engine in
its own right. Simply put, Draw4's don't suck to topdeck as much as a Lab Man.

> Why play twice as many rituals as previous lists?

This is probably easy to figure out but I'll touch on it anyway. We're playing
lots of cards that have a mana cost of BBB. You often are casting 2 or more of
those cards in a single turn. You need the extra rituals. A nice bonus is that
PiF from the board becomes a lot easier to use and it can help play through soft
permission like Spell Pierce.

> Why 3 Cabal Ritual/1 Rain of Filth

I'm not 100% convinced of this one myself but for now I'm sticking with it. I
felt like I wanted a 5th 1-mana ritual, but not 9 rituals, and I really wanted
the 3rd Preordain, so the cut that made the most sense was the 4th Cabal Ritual.
Rain of Filth also has a very particular usage in the only reasonable
pass-the-turn pile I've discovered so far.

> Why the singleton Conjurer's Bauble?

I view it as a necessary evil. It's a cantrip that can be cast off any color of
mana, and it's a "saved draw" which is a concept you'll be familiar with if
you've played or read about other iterations of Doomsday decks. It also is
useful for sneaking an extra storm into your piles, which I'll cover more in
depth later.

> Isn't playing Thoughtseize alongside Doomsday and Draw4's a ton of life loss?

Yes. Life total management is an important aspect of playing this deck. You must
cast aside any fear you have of dealing damage to yourself. I win many games at
a single digit life total, often just 1 life. It's possible that another discard
spell could be better, but Thoughtseize is just the best at what it does. The
number of games I've lost because of it is negligible, and the number of games
I've won because of it is considerable. (Editor - "The only life that matters,
is the last" is a key lesson many people need to learn in magic).

> Why play Doomsday over other Storm decks?

The primary reason is because it's sweet. It's a fun deck that makes you feel
smart. Potential benefits over other Storm lists include the flexibility
provided by Burning Wish, resilience to discard due to real card advantage
elements and access to Past in Flames, and its ability to often ignore graveyard
hate. It also (now) relies substantially less on Lion's Eye Diamond than decks
with Infernal Tutor, which can be helpful at times. But in practice it likely
isn't as good as other Storm decks and if you have interest in the deck you
should come to terms with this before proceeding.

## How to Win Games

Doomsday is a Storm deck. As such, this deck has (barring certain sideboard
options) 2 cards that are capable of ending games, both utilizing the Storm
mechanic. Most games will be won with Tendrils of Agony, but sometimes Empty the
Warrens is your best option. This list has 2 classes of Tendrils kills: Doomsday
kills, and "natural" Tendrils kills.

### Killing with Doomsday

Doomsday functions as a Storm engine by tutoring up whatever 5 cards you need to
generate lethal storm. Typically one of these cards is Infernal Contract, and
one is Tendrils of Agony. The reamining cards usually generate mana.

#### Basic Piles

> Cantrip in hand - {{BBB}} + {{UBBB}} - 7 Storm

<row variant="pile">{{!IC}} {{!LP}} {{!DR}} {{!DR}} {{!ToA}}</row>

For this pile, you'd cast Infernal Contract, drawing the remaining 4 cards, then
cast the 2 Rituals off the Lotus Petal, then finish up with Tendrils of Agony.
This generates 7 storm on its own taking into account the cantrip and Doomsday
itself. The remaining storm generally comes from a Ritual (6) to cast a Doomsday
(7) and maybe an LED (8) to generate the mana for IC. The 10th spell might be a
Duress to see if the coast is clear, or an extra ritual or something.

Now imagine a scenario where you have an untapped Island and Swamp, and a hand
of DD, LED, PN, DR. You can cast Doomsday, you have a cantrip to draw into the
pile, and you have an LED to make mana for the Draw4. That's 4 storm, plus 5
from the pile makes you 1 short. Fortunately you can squeeze that 10th storm out
of your pile with a slight modification:

> Cantrip in hand - {{BBB}} + {{UBBB}} - 8 Storm

<row variant="pile">{{!IC}} {{!LP}} {{!DR}} {{!CB}} {{!ToA}}</row>

Now you use IC to draw the remaining 4 cards, cast DR off the LP, use the
floating BBB to cast CB (BB leftover), activate CB targeting DR to recycle it,
and cast it off the floating BB to leave you with exactly enough mana for ToA.
This trick to squeeze an extra storm out of the pile is one of the main reasons
Bauble is in the deck. Notably, this pile does not dodge graveyard hate. If you
need an extra storm from your pile and need to dodge gravehate, you can do it
for 1 extra mana of any color:

> Cantrip in hand - {{BBB}} + {{1UBBB}} - 8 Storm

<row variant="pile">{{!IC}} {{!LED}} {{!LED}} {{!LP}} {{!BW}}</row>

With 1 floating mana left over after casting IC, you can make red with the LP to
BW for ToA and use the LEDs to generate the mana for it.

The vast majority of piles are going to be variations on these. Something I've
noticed with this list is that piles tend to be simpler than in older lists. I
think being able to put the whole pile in your hand simplifies things a little
bit, but the changed costs of piles take away some flexibility.

#### Additional Useful Piles

These are some situations you may find youself in and examples of piles you
might use to win. Make sure you understand how much mana is needed post-Doomsday
to execute one of these piles. Many of these piles can be quite mana hungry.

**IC in hand used to draw into pile**

> IC in hand - {{BBB}} + {{BBB}} - 7 Storm

<row variant="pile">{{!LP}} {{!DR}} {{!DR}} {{!CB}} {{!ToA}}</row>

> IC in hand - {{BBB}} + {{BBB}} - 8 Storm

<row variant="pile">{{!LED}} {{!LED}} {{!LP}} {{!CB}} {{!BW}}</row>

**Think the opponent is being cute and sandbagging an answer to Tendrils?**

> Cantrip in hand - {{BBB}} + {{UBBBB}} - 7 Storm

<row variant="pile">{{!IC}} {{!DR}} {{!DR}} {{!Dur}} {{!ToA}}</row>

**Need to get rid of something like a Gaddock Teeg or Leyline of Sanctity**

> Cantrip in hand - {{BBB}} + {{UUBBB}} - 7 Storm

<row variant="pile">{{!IC}} {{!DR}} {{!DR}} {{!CoV}} {{!ToA}}</row>

Note that this only works post board since CoV isn't in the maindeck.

**Brainstorm and IC in hand**

> BS and IC in hand - {{BBB}} + {{UB}} - 8 Storm

<row variant="pile">{{!DR}} {{!LP}} {{!DR}} {{!DR}} {{!ToA}}</row>

**Brainstorm and ToA in hand**

> BS and ToA in hand - {{BBB}} + {{UB}} - 8 Storm

<row variant="pile">{{!IC}} {{!DR}} {{!DR}} {{!LP}} {{!DR}}</row>

This concept of using BS to trade cards in hand for cards in library can be
extended to other pile components, like if you have a spare LP in hand, etc.

#### Can You Do a Pass-the-Turn Pile?

Previous Doomsday lists would often be able to cast a Doomsday and setup a kill
for next turn with basically 3 lands and nothing else available as resources.
This deck is nowhere near as mana efficient at doing it, but setting up a
pass-the-turn pile is possible and comes up occasionally. Knowing what it takes
to execute one could save your ass. This is the first PTT pile I was able to
come up with in this new list:

> {{1BBBB}} - 11 Storm

<row variant="pile">{{!IC}} {{!Rain}} {{!CR}} {{!CB}} {{!ToA}}</row>

The idea here is that you cast ToA twice by recycling it with the Bauble. ToA ->
CB -> ToA costs 9 mana total. With 5 lands on the field (including all 4 black
producing lands) you can make this pile work with no cards in hand and nothing
but lands on board. This is the reason Rain of Filth and CR are used. Rain helps
you get to threshold so that CR makes as much mana as possible. It's worth
noting that LED is +3 mana like a CR with Threshold and could replace CR in some
situations. Most of the time you won't have so many lands on board and you'll
need to rely on rituals in hand or mana rocks on the field to get you up to 9
mana. As you might imagine this scenario won't come up that often, but sometimes
you'll find youself with a bunch of mana and a Doomsday but no cantrip, and the
best bet may be to slam the Doomsday and hope you get another turn unmolested.
Incidentally the same setup can be used as a same-turn pile to potentially make
upwards of 20 copies of ToA if your opponent has an unusually high life total.

Here is another potential pass-the-turn pile:

> {{BBBBRR}} - 8 Storm

<row variant="pile">{{!IC}} {{!DR}} {{!DR}} {{!BW}} {{!ToA}}</row>

Here you would wish for Past in Flames to flash back your rituals and end it
with ToA. This one requires 2 red mana for Wish and PiF, and only makes 8 Storm
on its own. But imagine you had just 2 Seas and an LED on board, and a ritual in
hand after resolving Doomsday. With the above pass-the-pile you could draw IC
for turn, ritual it out cracking LED for RRR, cast the other 2 rituals, wish for
and cast PiF, then flashback all your rituals and cast Tendrils for 10 copies.

### Killing Without Doomsday

This deck gets over half of its kills without ever casting Doomsday. These wins
come in 2 different forms, Empty the Warrens kills and Natural Tendrils kills.

Empty the Warrens kills are simple so I'll get them out of the way first. Do you
have a few rituals or petals, maybe an LED, and an Empty the Warrens or a way to
get it? Consider trying to kill with Empty. EtW lets you "go off" faster and
with a lower storm count and still likely win. This is useful when you find
yourself with an opening to *go off* but a non-lethal storm count. Did you
duress your Delver opponent and see they had no castable countermagic? Are you
concerned about a potential lockpiece like Chalice or Thalia? These are good
times to consider the EtW plan. If you can make at least 8, and preferably more
like 12+ goblins, it may be good enough to get you the win by attacking over 2-4
more turns. This plan isn't at its best vs combo decks, decks that can quickly
go wide like Elves or sometimes Goblins, and decks with can wipe your board like
Miracles and Lands.

Natural Tendrils kills are a bit more complicated. These can be broken down
further into 2 categories, Past in Flames kills and Draw4 kills.

PiF kills are typically deterministic and the concept should be familiar to
those who've played other Storm variants. Imagine a hand like BW, BW, DR, DR,
DR, LED. This would let you cast all your mana producers, BW for PiF, recast all
your rituals and then cast the 2nd BW to get ToA. You can do the same if one of
the BW is the maindeck ToA. Non-deterministic PiF lines are also possible, where
you might not have a 2nd BW or the ToA, and you're relying on flashbacked
cantrips or Draw4's to find you the kill.

Draw4 kills are often non-deterministic and involve casting a Draw4 and hoping
to chain that into a lethal Storm count. The way this typically happens is by
playing out all your rituals and mana rocks, casting your Draw4, and hoping it
draws you into something you can kill with, namely Burning Wish. Sometimes you
can use a cantrip to set up the BW to be drawn, ensuring you'll draw at least
one card needed for the kill. The real trick to trying to kill like this is
determining when to go for it and how to sequence your plays to see the most
cards and maximise your chances of recovery should you whiff. If you can have at
least a few black mana and 1 red mana left after casting a Draw4, it's worth
considering attempting a non-deterministic Natural Tendrils line. Ideally you'd
also have some blue mana available because you may draw cantrips you'd like to
cast. When considering sequencing Draw4 kills, I have some general rules of
thumb. If you have a cantrip in hand it's generally better to cast it after the
Draw4. This will let you see the most cards. I also try to spend as few
resources before casting the Draw4 as possible to give myself the best chance of
recovery should I whiff. For example, if I have 2 Underground Seas on board and
my hand is 3 Dark Rituals and a Draw4, I'm going to start that combo attempt
with Ritual -> Draw4. No need to spend those other rituals just yet if I can
still cast them later. Now consider if I had a Sea and a Badlands on board, and
the same hand. Here I'd probably play 2 Rituals off the Sea and then the Draw 4.
This leaves me with a red mana for Wish and mana floating after the Draw4 to
cast the last Ritual. An exception to this rule would be if I had an LED I
needed to crack to make red mana, in which case I might go all in and blow the
Rituals so I could crack the LED. Hopefully this gives you an idea of how to
approach these kinds of Draw4 kills.

## General Play Tips

Knowing how to use Doomsday and your Draw4s to generate lethal storm is great
and all but it's equally important to be able to put yourself in a position to
do those cool things. In this section I'll present some general play tips in a
stream-of-consciousness manner.

There are 2 conflicting needs at work in this deck. One is the need to see as
many cards as possible, and the other is the need to conserve cantrips for use
as a combo peice alongside Doomsday. This balancing act gets easier with
practice. Cast your Preordains first. Hold onto Brainstorms as long as possible.
Remember that BW is a pseudo-cantrip into a DD pile since it can get you a
Draw4. Doomsday won't be your main plan in some matchups and then you can use
your cantrips more aggressively to set up another kind of kill.

Have a plan from the start of the game. Obviously this plan can change, but if
you don't have a plan and know what you need to execute it, you will cantrip
poorly, duress poorly, fetch poorly, just generally spend your resources poorly.
A lack of a plan will lose you games you could otherwise win. I think this
concept applies to most every deck, but it's particularly important in proactive
combo decks that require careful resource management. Look at your opening hand,
determine whether you think you'll be winning with DD, Natural Storm, EtW, spend
your resources in the way that best facilitates the plan. It's ok if sometimes
the plan is *gather info and resources*, but if you can't quickly devise a more
concrete plan you put yourself at a disadvantage.

Don't be afraid to cast a Draw4 for value. Untapping with a full grip is insane,
even if it cost you half your life. There can be a steep learning curve to
figuring out the best time to do this. There's no hard rules but when
considering the possibility of a value Draw4, there are 3 general factors I
consider.

1. How many other cards must you spend to cast it? The more cards you put into
   casting it, the less value it nets you. Ideally you hardcast it off lands and
   spend no rituals or petals.
2. Is there any reason you should hold onto it? It can draw you into Doomsday
   pile or be a potential Storm engine, but don't get too hung up on holding it
   for a combo turn if you are still missing lots of other resources you'd need
   to combo.
3. Do you anticipate being able to win or NEEDING to win within a turn or 2 of
   casting it? I think this is the hardest one to get a feel for. If you feel
   like you're at parity or slightly ahead of your opponent but expect to be
   jockeying for position for another couple turns, then maybe hold on to it,
   especially if you have other spells you could cast, like a cantrip or extra
   discard. More information lets you make a more informed decision about when
   to cast it. If you're way ahead, a value draw 4 could be the nail in the
   coffin, but it also may not be necessary. If you're behind, you likely need
   to cast it, even if you're staring down a threatening board state. Here's an
   example I hope is illustrative: imagine you and your opponent are both
   empty-handed but they have a Gurmag Angler on board. You are at 14 life and
   your topdeck is an Infernal Contract. I'd snap that bad boy off. Going to 7
   life means you get at most one more turn but you see more cards this way than
   you do by waiting to die to a 3-turn clock. Maybe you untap at 2 life and
   string together a PiF kill or something, or maybe those 4 cards are awful but
   in that case you would have died anyway.

This list has enough *must-counter* spells that you have a shot at using extra
business spells to muscle past countermagic even if you're short on Duress
effects. Draw4s are excellent at this, since if they do resolve you're up on
cards. Burning Wish is also decent since if it resolves you can still do
something produtive with it like grab a Draw4 or a PiF. Be careful when using
Doomsday as a bait spell. Most of the time opponents will throw counters at it
without a second thought, but if they call your bluff you can very well lose the
game. Ideally you only use DD as bait if it seems like you can actually go off
with it, both because you won't lose to yourself if it resolves, but also
because it makes your opponent more likely to counter it.

Draw4s are the best single card for desperation plays and opportunistically
taking advantage of windows your opponent gives you. Any time you resolve a draw
4, even with no cards in hand and no mana floating, there is a chance you end
the game on the spot.

I said earlier that life total management was very important. Doomsday and
Draw4s both halve your lifetotal and they round up, meaning you generally need
at at least 4 life to go off with Doomsday. If you life total is dropping
quickly you may need to avoid killing with Doomsday. Foreseeing this and knowing
when to pivot away from Doomsday will help you win games you might not have
otherwise.

Cabal Ritual with threshold is 5 black mana. Just need one more to cast DD + IC.

Don't shoot off Duresses willy-nilly.

Try not to be overly afraid of Surgical Extraction. There is no one card that
can be removed from your deck to completely shut off your ability to win. Since
Draw4s let you pick up your whole deck after Doomsday there's no good way for
your opponent to Surgical you post-DD and leave you with less than a 60% chance
to win by reordering your pile.

When you want to cast a cantrip, think hard about what you're looking for. What
cards do you need to see to be able to string together a win? Does casting this
cantrip now do enough for you, or should you wait a turn to see another card,
maybe draw a Doomsday?

Know when you can afford to play around Wasteland. As a 3 color deck you can't
always afford to fetch a basic Island on t1 if you want to cast a Wish and a
Dark Ritual on turn 2.

Fear is the mind-killer.

## Sideboarding

I'll provide a rough sideboard plan against as many common decks as possible but
first I'm going to briefly touch on the construction of the sideboard and why
I've chosen the cards I did, and why I've left some out.

> 1 Doomsday, 1 Tendrils of Agony, 1 Infernal Contract, 1 Empty the Warrens, 1
> Past in Flames

This is the irreplaceable core of the wishboard. IC could conceivably be an
Ideas Unbound or Act On Impulse but I think IC is the best option since it can
be brought in for certain matchups.

> 1 Massacre, 1 By Force

These are technically flex slots but I don't like to leave home without them.
Massacre in particular is a huge help in certain matchups. As for By Force, I
like to have a card that can deal with Chalices. Other options include
Consign // Oblivion, Meltdown, and Pulverize although you'd probably want a second
Volc to support that.

> 2 More Empty the Warrens

I've found these to be the best sideboard option vs Delver-ish decks, among
others. Maindeck Empties are good for fighting through counterspells.

> Bounce Spells

For prison and hatebears and random crap you need to get off the battlefield.

> Flusterstorms

Decent against Combo, fine against Hymns and counterspells and stuff although I
usually don't bring them in against Hymn decks.

> Why no Hurkyl's Recall?

It's powerful but narrow and given the reduced space I value flexibility in my
answers.

> Why no Shelldock Isle/Emrakul?

It's fine but I don't think it's good enough against a large enough chunk of the
format, and it's more dead cards in the deck which I'm trying to avoid. If your
expected meta has lots of Show and Tell, Reanimator, and hard control decks, and
few Wastelands and non-blue combo decks, it might be worth it.

> Why no Lab Man anywhere in the 75?

I initially cut it because there aren't any great piles with it and Draw4's, and
again it's a dead card. At this point I can say with reasonable confidence that
not having it hasn't had an adverse effect on my winrate. Pass-the-turn Lab Man
piles were one of the deck's best tools against heavy discard. This new list
just has different tools against discard in the form of Draw4s and PiF.

### Sideboard Guide

#### Grixis Control

-1 Doomsday, -1 Rain of Filth, -1 Preordain  
+2 Empty the Warrens, +1 Infernal Contract

In this matchup my plan A is to get off an EtW in the first few turns of the
game as that is usually enough. If that doesn't happen you want to be able to go
toe-to-toe with their discard and card advantage. You can consider bringing
Flusterstorm in for this matchup if you feel like you want a little more help.
Maybe cut an LED and a Duress.

#### Miracles, High Tide, any slow Ux Counterspell deck

-4 Lion's Eye Diamond, -4 Burning Wish, -1 Preordain  
+1 Doomsday, +1 Infernal Contract, +1 Tendrils of Agony, +1 Past in Flames, +3
Empty the Warrens, +2 Flusterstorm

I am not at all confident in my sideboard plan for this matchup. I've tried a
ton of different things and this feels the best but I don't like the matchup. My
game 1 winrate against Miracles is around 90% but my match winrate is less than
50% meaning something goes drastically wrong post-board. Counterbalance is the
biggest problem card, but postboard they have a ton of other disruption. The
gameplan here is to use your interaction to stop their gameplan while forcing
them to spend resources interacting on your terms. Against Miracles, this could
mean Duressing their control cards and trying to whittle down their life total
with EtW, which forces them to commit resources to finding Terminus. Vs a deck
like High Tide, it means attacking their combo peices and using your
individually powerful cards to overwhelm their counters. Disrupt them and make
them spend resources trying to reassemble instead of spend resources stopping
you.

#### Most Delver Variants

-2 Doomsday  
+2 Empty the Warrens

Doomsday isn't great in the Delver matchups. They have bolts, a fast clock and
lots of disruption. Empty the Warrens is a better plan. Often Delver players
will keep threat-light, disruption-heavy hands and Empty stays relevant
suprisingly late into the game. Be patient.

#### Death's Shadow

-3 Doomsday, -1 Conjurer's Bauble  
+2 Empty the Warrens, +1 Tendrils of Agony, +1 Infernal Contract

This might seem weird and I'm not 100% convinced on this board plan but Doomsday
is uniquely bad here. They often have heavy discard and your life total matters
a lot against their fast clock. A naturally drawn Tendrils is often excellent in
this matchup, and if you cast a Wish it most often is to find Empty the Warrens.
The Bauble gets cut because it's bad without Doomsday, and the Contract comes in
because you need maximum ability to try and take advantage of any opening you
get.

#### Storm

-1 Rain of Filth, -1 Doomsday, -1 Preordain  
+2 Flusterstorm, +1 Infernal Contract

Games can end before Rain of Filth becomes relevant, and similarly games can end
before you have enough lands for a pass-the-turn pile so a Doomsday gets cut.
Flusterstorm comes in for obvious reasons, and Contract comes in because your
life total doesn't really matter and the matchup often devolves into
discard-laden attrition games.

#### Death and Taxes and pretty much anything with Chalices

-3 Duress, -1 Preordain  
+3 Echoing Truth, +1 Chain of Vapor

Duress does very little and you need ways to bounce their stuff. Either win
before they drop a lockpiece, or try to get rid of it and go off. Don't forget
that Burning Wish can find solutions to hateful permanents, but a quick EtW can
be a solution too.

#### Lands

-4 Thoughtseize  
+3 Echoing Truth, +1 Chain of Vapor

Here, Thoughtseize doesn't hit anything Duress doesn't, and the bounce spells
are better than more discard. Gameplan is the same as vs other lockpiece decks.
Win before the Spheres come down, or bounce them. The mana denial is heavier in
this matchup so watch out for that, and remember that Empty the Warrens is
pretty bad in this matchup.

#### Sneak and Show and Reanimator

-1 Preordain, -1 Rain of Filth  
+2 Flusterstorm

You don't have time to be casting a bunch of cantrips or making enough land
drops for Rain to be good. Flusterstorm is your best hope in these matchups.
Prioritize stopping their combo over setting up your own. Draw4's are good in
this matchup because they are the best single card at taking advantage of a
window your opponent gives you, and it may be correct to side the same as Storm
for this matchup.

#### Turbo Depths or Nic Fit, without blue splash

-3 Duress, -1 Thoughtseize -1 Preordain  
+3 Echoing Truth, +1 Chain of Vapor, +1 Infernal Contract

Very different decks but identical sideboard plans. Both decks may have things
you want to bounce and plenty of discard, and give you some leeway with using
your life as a resource. If either deck is playing blue I'd leave all 4
Thoughtseize in and only bring in 2 Echoing Truth.

## Statistics

Just some general stats on my matches with the deck at the time of writing. The
sample size is small, just shy of 100 matches so take it with a grain of salt.
Percentages are rounded to the nearest whole number.

**Match Win Rate:** 63%  
**Avg Combo Turn:** 3.55  
**Avg Mulligan:** 6.68  
**Overall Game Win Rate:** 59%  
**G1 Win Rate:** 68%  
**G2 Win Rate:** 51%  
**G3 Win Rate:** 58%  
**Percent Matches Won with Doomsday:** 39%  
**Percent Matches Won with Natural Tendrils:** 36%  
**Match Win Rate by Die Roll:** Win Roll - 65%, Lose Roll - 62%  
**Game Win Rate by Mulligan:** 7 - 63%, 6 - 61%, 5 - 18%, 4 - 25%  
**Avg Combo Turn by Wincon:** DD - 3.58, Natural Drills - 3.93, EtW - 3.14
