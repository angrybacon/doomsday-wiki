---
authors: angrybacon, Labman13, Doishy
banner: Counterspell | TMP
title: Playing Around Interaction
---

## Table of Contents

## Preamble

Part of the appeal of Doomsday as a card and as a deck is its flexibility.
Doomsday allows you to tutor up just the right set of five cards to pull out a
win from a wide variety of situations. Some hate that other combo decks would
struggle against, Doomsday can beat rather easily. Of course there are things
Doomsday struggles with but we'll discuss ways to fight through all kinds of
hate. This will be far from comprehensive but it should give you a strong basis
for how to approach different types of interaction from your opponents.

Generally when thinking about different types of interaction and combo-hate your
opponent might have, it is useful to group them up into categories that have
similar techniques for fighting individual cards in them. In this way we can
present approaches that have multiple applications rather than to cover every
possible corner case card you may face out in the wild.

## Playing Around Removal

### Cheating on Devotion

The first key point to state is when removal actually matters. Thassa's Oracle
has some key text on it that states the following:

> If X is greater than or equal to the number of cards in your library, you win
> the game.

This means that even in the face of a removal spell you can still win if the
trigger resolves assuming you have zero cards left in your library. The only
time removal matters is when you have cards left within your library. If an
opponent tries to remove the Oracle at that point, assuming you have no
additional Devotion to {U}, you will not be able to win off of the trigger.

The main counter to this is of course to try and ensure you leave zero cards
left in your deck before the Oracle trigger resolves. Another way is to
potentially try a _bait_ pile which tries to go off in one turn but has the
option to wait another. This assumes you are playing multiple Oracles. Let us
take this example from the Brainstorm chapter:

> {U} + Brainstorm + Thassa's Oracle

:::row{variant=PILE}
LED
SW
Pnd
EoA
TO
:::

1. Cast Brainstorm and put back Oracle then Ponder on top
1. Cast LED, cycle SW cracking LED for {U}{U}{U} and draw the Ponder.
1. Cast the cantrip and arrange your library so that it is (TO, EoA, TO)
1. Draw Oracle, cast Oracle to (hopefully) win.
1. If they have removal, pass the turn.
1. Draw Edge, cycle Edge to draw Oracle and cast Oracle to (hopefully) win.

This example is good if you suspect removal but are not under too much pressure
where you would not survive another turn. You can try and _go off_ with a backup
Oracle in the deck the turn after.

This pile plays around the following:

- Up to 2 pieces of removal
- Unavailability of a _draw_ spell
- A :card[Stifle] effect on the first Oracle trigger
- Countermagic for the first Oracle

If your opponent deals with TO with its trigger on the stack, you could be
missing on a couple Devotion to {U}. That's why it's important to try and
consume the entirety of your pile before going for it whenever you can,
especially if your opponent is likely to hold removal as you go off.

With enough mana, and other relevant permanents in your deck, you can utilise
extra potential Devotion to {U} to help bolster your effect. Cards like
:card[Baleful Strix], :card[Counterbalance], :card[Snapcaster Mage] or even
:card[Teferi, Time Raveler] are a few examples. The concepts presented here can
also help beat something like :card[Endurance] which, although doesn't actually
remove the Oracle, does usually result in your deck having too many cards to
enable you to win off of the trigger.

### Thinning with Fetchlands

Another trick you can do, to help achieve a library of 0 cards for your Oracle
trigger, is this: with an active fetchland in play as you resolve Doomsday, or
sometimes by putting both a fetchland and a fetch'able land inside the pile, you
can effectively thin further down the size of your library as you move towards
resolving TO.

> {U}{U}{U} + Ponder + Island  
> Land drop available

:::row{variant=PILE}
BS
SW
EoA
Polluted Delta|ONS
TO
:::

1. Cast Ponder to draw BS
1. Cast BS and put back Island then EoA
1. Cycle SW to draw EoA
1. Land Polluted Delta and fetch the Island
1. Cycle SW and play TO with 0 remaining cards

With the addition of the Surveil land :card[Undercity Sewers], you can even
remove 2 cards from your pile.

## Playing Through Countermagic

When trying to resolve Doomsday, a lot of people will try and fight over the
Doomsday itself however there are some circumstances where you should try and
think about the possibility of having to face countermagic after you have built
your pile. Examples may include where you have gone for an aggressive turn 1
pile on the play or where your opponent thinks they can get you by countering
Oracle and thereby leaving you stuck with no cards left in the deck and a lethal
draw step looming or if you've left a mana open to pay for a Daze they may not
have gotten value from otherwise. Thankfully there are a number of ways and
means to play around / punish a resolved Doomsday in the face of countermagic.

### Proactive Disruption

You can utilise your proactive disruption spells like Thoughtseize or Veil of
Summer at the start of your turn. Take the following scenario where you have
cast Doomsday on turn 1 for a PTT pile in the face of a known {U} deck and it
has resolved (from the Basics chapter):

> Opening hand (7)  
> Game 1  
> On the play

:::row
DR
DD
FoW
FoW
Swamp
Island
Pre
:::

Although we have Force of will in our hand we are wanting to use LED to help us
generate enough mana to cast everything we want. If we use LED our Oracle
becomes exposed thanks to having to discard our Forces. Here is one potential
solution assuming we played Doomsday off of Swamp and Dark Ritual:

:::row{variant=PILE}
BS
Tsz
LED
EoA
TO
:::

1. Draw Brainstorm for turn
1. Play Island, cast Brainstorm with Island, and put back Force and Preordain on
   top
1. Cast Thoughtseize to take away any potential interaction
1. Cycle EoA cracking LED for {U}{U}{U} and draw Preordain
1. Scry the Force of Will to the bottom, draw Oracle
1. Cast Oracle for the win

Here we have taken some of the concepts learnt in using Brainstorm and applied
them to a scenario whereby before, we had not thought about facing interaction
fully. You can do a similar scenario where you have initiated off of Bayou with
Veil of Summer instead.

:::row{variant=PILE}
BS
VoS
LED
EoA
TO
:::

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
Doomsday is no different. A lot of the consideration that comes from using
reactive protection within piles generally boils down to 2 points:

- Having enough resources to allow the casting of countermagic in your pile
- Not having to crack LED to achieve the win

Resources in this context can mean mana, cards in hand to pitch to Force of
Will, lands in play to return with Daze or cycle off of Edge of Autumn or simply
just the number of cards in hand. We can have a look at a number of options that
are run in lists for countermagic choices and how they may affect your pile
building options.

The greatest tool in allowing the use of countermagic in piles is Ideas Unbound.
The extra card drawn can allow a lot of flexibility in keeping up countermagic.

Take the following hand:

:::row
DR
DD
FoW
FoW
Underground Sea|LEB
Island
Pre
:::

Once again we are taking our PTT example but this time we are assuming we are
not playing against a deck running Wasteland effects. Because of this we can
guarantee to have UU available on our turn. As a result we can build a pile like
so:

:::row{variant=PILE}
IU
LP
LP
EoA
TO
:::

This pile allows us to simply cast IU and play out Oracle without ever needing
to _drop shields_ of the two Forces in hand. It is also resilient to opposing
discard as they can only take 1 Force and there is still a Preordain to pitch
for the other.

In an alternative scenario if you were to face similar, but with an additional
{U} available, you could build the same thing but with an additional piece of
interaction such as Daze, Pact of Negation or simply a second blue card to allow
you to cast Force of Will twice if they try and fight over the Oracle.

### Other Tools Available

There are some key cards that may be used to help work around traditional
countermagic. Cavern of Souls is an easy fit into the Doomsday gameplan and, if
a land drop is available, can easily slot into piles with a _draw_ spell.

> {U} + Brainstorm + X

:::row{variant=PILE}
Pdt
LED
EoA
TO
CoS
:::

You should recognise the above as a simplified Brainstorm pile. In this we have
simply swapped out a Lotus Petal with Cavern. This severely punishes anyone
trying to wait on countering the Oracle by letting the rest of the spells
beforehand resolve.

Likewise it can slot into most IU piles too.

> {U}{U} + Cantrip

:::row{variant=PILE}
IU
LP
CoS
EoA
TO
:::

Teferi, Time Raveler is another tool that can be used to help prevent
countermagic however it is expensive to include in piles. It might be suitable
for a PTT pile in the mid to late game. The built-in draw effect can help access
your pile and, when combined with :card[Baleful Strix], can function as pseudo
draw 2 or 3. You can use this draw to replace a cantrip slot in any of the piles
already explained.

## Playing Through Permanent-Based Interaction

### Chalice of the Void

:card[Chalice of the Void] is a Legacy staple that is featured in a number of
decks. It seeks to generate card advantage by (hopefully) countering a number of
cards or preventing the casting of cards of a certain CMC. Normally Chalice is
set to X = 1 most of the time which, although can be a heavy detriment to a deck
comprised of predominantly one cost cards, does not stop the deck from winning
the game.

Although it certainly is convenient trying to get {B}{B}{B} from Dark Ritual,
you can easily just cast it from lands. It is perfectly fine getting to turn
three without having fetched and just finding three black sources to cast
Doomsday. From that point you don't have to cast a single one mana spell.

> {U}{U} + Cantrip

:::row{variant=PILE}
IU
LP
LP
EoA
TO
:::

> {1}{U} + Cantrip

:::row{variant=PILE}
Pdt
Dur
LED
EoA
TO
:::

Both of the above examples are all comprised of zero or two mana cost spells and
free cycle effects all of which can circumnavigate the limitations Chalice
creates. If playing against a known Chalice deck, simply going turn one Doomsday
off of Dark Ritual with another land in hand is pretty safe given you can ignore
the interaction (at least where Chalice is concerned). The above are pretty
cheap too representing post Doomsday costs of {U}{U} and {1}{U} respectively.

Chalice is not limited to being set on one. Sometimes an opponent will want to
deploy a threat plus disruption on turn one so might lead with Chalice X = 0 or
may play a Chalice X = 2 in the late game. For X = 0 this is fine so long as you
have been making land drops throughout the game or, at worst, allows you to put
lands into the pile itself.

> {U}{U}{U} + Cantrip  
> Land drop available

:::row{variant=PILE}
IU
SW
Island
EoA
TO
:::

If X = 2 then you can build something like a Brainstorm pile that only uses your
one mana cantrips alongside something like Cavern of Souls to get through the
Chalice. Alternatively the use of Unearth can help get around the need for a 2
drop using LED as a discard outlet for Oracle instead of _milling_ with Predict.

If you are playing Veil of Summer against Chalice on 0 or 2 then simply casting
Veil, or leading a pile with it, will allow your spells to resolve through the
Chalice. This is especially useful for BUG variants.

Post-board, for all of the above, you can also start adding removal into your
piles as the top card in order to try and facilitate the win. Take the below PTT
example against a Chalice of the Void.

> PTT + {U}{B}{G} + Brainstorm + X

:::row{variant=PILE}
Abrupt Decay
LED
EoA
Pnd
TO
:::

Although we are talking predominantly about Chalice of the Void, the same
information can apply to facing against Counterbalance (Veil still gets around
the Counterbalance trigger) or even, to some extent, Sanctum Prelate. These
cards both also seek to cut you off a key cost of card however with some cards
like Prelate, it is very likely to be set at 'X' = 3 to prevent the casting of
Doomsday in the first place.

### Taxing Effects

When discussing these effects we are talking about things like :card[Thalia,
Guardian of Thraben] and :card[Thorn of Amethyst]. These generally do not
actively stop you _going off_ and winning the game however they do present
potential for a lot of delay on reaching that combo turn, especially if being
placed under pressure. The piles themselves can be adapted, using the free
cyclers, to try and become as mana efficient as possible. This is especially
good when knowing you don't face removal as often the Oracle itself is not
taxed:

:::row{variant=PILE}
SW
EoA
TO
DD
DD
:::

In the above example you can simply cycle the first two cards and then cast
Oracle for {U}{U}. The two Doomsdays are just placeholders as, in theory, you
will not need them to achieve the win. Obviously, when facing known removal you
would have to adapt this further but quite often the tax effect can also prevent
the removal being cast as well so bear that in mind.

### Spell Restrictors

Spell restrictors are things that place a limitation of how many spells you may
be able to cast in a given turn. Cards like :card[Ethersworn Canonist] or
:card[Deafening Silence] both achieve this well. Just like the limitations with
the tax effects, these generally only seek to slow you down rather than prevent
a full game win and both can be played around.

For example, playing against Deafening Silence you can do a PTT pile similar to
the one stated against taxing effects ensuring that you only ever cast one
spell.

### Draw Restrictors

This category is one of the hardest to fight through effectively as they cause
both delay and prevention of most of the piles we want to use. :card[Leovold,
Emissary of Trest], :card[Narset, Parter of Veils], :card[Hullbreacher] and
:card[Spirit of the Labyrinth] all fall under this heading. The easiest way to
deal with them is of course removal however that is not always viable,
especially in game one. Another way is to simply pass the turn a number of times
using the sorcery speed cantrips on your turn and the instant speed cantrips on
the opponent's turn. :card[Predict] and :card[Consider] are quite useful in this
scenario as they allow you to _dig_ more than one card at a time. Something like
the following may be useful facing an opposing Narset for example (spread over
multiple turns):

:::row{variant=PILE}
Pnd
Con
EoA
Pnd
TO
:::

One key thing to note with these cards involves Teferi, Time Raveler's -3
ability. If use the ability on a Leovold, you _will_ get to draw the card
afterwards. This can allow you to remove the disruption and _crack_ into the
pile at the same time.

### Search Restrictors

These are cards that, rather than disrupt the Doomsday pile itself, actively
prevent you building it in the first place. See below the Oracle text for
Doomsday:

> Search your library and graveyard for five cards and exile the rest.  
> Put the chosen cards on top of your library in any order.  
> You lose half your life, rounded up.

The first line is the relevant one. When resolving Doomsday you have to search
two zones to construct your pile. Cards like :card[Shadow of Doubt],
:card[Ashiok, Dream Render], :card[Leonin Arbiter] and :card[Aven Mindcensor]
can all prevent you from searching the library and cards like :card[Rest in
Peace] can limit what is available to find in the graveyard. Out of these the
formers are certainly the most detrimental as they can cut you off from the
majority of your cards. So long as you are mindful of these you can however pull
a neat trick.

If you have Oracle in hand, you can cast Doomsday without being able to search
your library. You still need to find 5 cards from your graveyard (if able) but,
assuming those are all cantrips and fetchlands, you can still build a
serviceable pile from them. Even better if your graveyard is small or
non-existent; you can cast Doomsday and set your library of 0 cards and then
cast Oracle to win.

There is a special case scenario with :card[Opposition Agent]. If you cast
Doomsday with an Opposition Agent in play, your opponent gets to search for five
cards and the rest of your deck is exiled. Because your opponent controls the
search process they will get to see your hand and you will not be able to search
from the graveyard. The only realistic way to beat a resolved agent is if you
already have Oracle castable in hand, hopefully using :card[Cavern of Souls]
otherwise the opponent could search for five counterspells to try and stop you.
Note that the agent will not give them a blue pitch for :card[FoW] but they
certainly can search for 2 copies of :card[DR] in order to hardcast the force.
You don't need to tell them though.

## Playing Around Shuffle Effects

Shuffle effects can be one annoyance to face when building a pile that would
otherwise have perfect ordering to it. There are some examples that you could
imagine needing to play around like :card[Field of Ruin] or :card[Assassin's
Trophy] but of those are a _may_ so you can usually opt out of the shuffle.
However the primary concern is in fact a card that is very prevalent in Legacy:
:card[Surgical Extraction].

Upon successfully resolving a Doomsday, assuming no cards like :card[Leyline of
the Void] are present, there will be one card in your graveyard and that will be
the resolved Doomsday itself. This is a prime target for an opposing Surgical in
an attempt to mess up the ordering of a Doomsday pile as you try and _go off_ in
one turn. When the Surgical is used can depend on the opponent but if they wait
in response to a Predict for example it can really mess things up.

You can build piles that are either resilient to Surgical, giving decent odds of
succeeding despite the shuffle, or even immune to it. A big part of when the
opponent casts the Surgical can depend on what spell you are using to draw into
a pile. Let us take the following scenario:

> {U}{U} + Cantrip

:::row{variant=PILE}
IU
LP
LP
EoA
TO
:::

If the Cantrip used to _dig_ into the pile is something like a Street Wraith
then the opponent is likely to Surgical right away meaning you have a 20% chance
to draw into the desired Ideas Unbound or a 5% chance to draw Edge to then Cycle
immediately into Ideas Unbound (25% success rate chance in total). If using
another cantrip, the opponent still may Surgical however the odds of you finding
what you need are dramatically increased. See below a table that shows the
percentage of successfully finding either the IU itself or Edge of Autumn that
then cycles into IU.

|                | Street Wraith / Consider | Ponder | Brainstorm | Preordain |
| -------------- | :----------------------: | :----: | :--------: | :-------: |
| Perfect Pile   |           25%            |  70%   |    60%     |    70%    |
| Imperfect Pile |           20%            |  53%   |    45%     |    66%    |

If your opponent then waits on the Surgical for after you already have the
ability to draw three of the four remaining cards in the deck and are only
punished if you have Edge as the bottom card of the pile and the opponent has
removal for Oracle with no additional devotion present (assuming you don't have
the luxury to pass the turn). Calculating the percentages for other things like
Brainstorm piles is slightly harder, especially when you cannot predict when the
opponent will try to use their Surgical (if at all).

One cool trick you can use is to try and bait them into using a known Surgical
effect if you have your own in hand. By placing additional copies of Doomsday
into your pile, if your opponent tries to extract them, you can _shrink_ your
library by casting your own Surgical on the original Doomsday and _shrink it_ by
that amount. This again assumes they will use Surgical Extraction at a time you
want but it is a possibility to be explored.

> {U}{U} + Cantrip

:::row{variant=PILE}
SW
EoA
TO
DD
DD
:::

Here you have a pile where, if they Surgical in response to the cantrip effect
on Doomsday and you remove all the copies in the pile, you will have a
deterministic win (using one of Ponder, Brainstorm or Preordain) as you can
ensure you are able to see all the cards within the deck and not die to drawing
too deep with Brainstorm. Even if they do not use Surgical you can still just
cycle twice and play Oracle with a library of two cards.

## Everything Else to Respect

As you get more matches under your belt with the deck you will start to face
more and more interaction that might seem a surprise or unexpected. We will try
and list those that are relatively common to face and will try to provide
examples on how to play around them. This is not an exhaustive list however and
you will eventually run across unexpected interactions. If something does _get
you_ then stay calm, take it as learning and move on.

### Grindstone

:::row{variant=CENTERED}
Grindstone
:::

Grindstone deserves its own section because of how unique its effect is and the
sub-game it involves between you and your opponent. You can find yourself in a
situation whereby your opponent may have an active :card[Grindstone] and the
mana to activate it but you otherwise have a window to try and win. Just like
with Surgical Extraction it is difficult to know if and/or when the opponent may
try to activate the Grindstone but the following pile covers all possible cases
to resolve the Oracle with at most 2 cards left while passing the turn.

> PTT + {U}{U}

:::row{variant=PILE}
SW
EoA
TO
SW
TO
:::

For the example above, if they activate Grindstone prior to accessing the pile
you will _mill_ SW and Edge, drawing TO for your turn and allowing you to cast
it. If they wait until you draw SW (activating in your draw step) you will
_mill_ Edge and Oracle. This allows you to SW into SW into Oracle. If you are
able to resolve the first SW cycling without any response then you can access
Edge and cycle again. If they activate here you will mill TO and the second SW
and draw the second TO.

This is just one example in a single set of potential circumstances of course.
Similar to this includes cards like :card[Hedron Crab], :card[Altar of
Dementia], :card[Trenchpost] and :card[Ipnu Rivulet].

### Mindbreak Trap

:::row{variant=CENTERED}
Mindbreak Trap
:::

:card[Mindbreak Trap] is a popular tool to beat combo decks and work around Veil
of Summer. If you know or suspect the possibility of facing it then you can
either try to incorporate countermagic into your strategy or build a PTT pile
that is mindful of the spell count. Assuming that you cast Dark Ritual into
Doomsday, it is risky to try and resolve a third spell.

With the following pile:

:::row{variant=PILE}
IU
Tsz
LP
LP
TO
:::

Assuming you had a cantrip ready to _dig_ into the pile, you can use it to try
and use it to either pre-emptively bait the Trap or to enable digging one deeper
so that you can lead on Thoughtseize the next turn.

You can also utilise tools like the cycling effects to just not cast three
spells. If you suspect a Mindbreak Trap in the opponent's hand, with three lands
available on the following turn you can go Dark Ritual into Doomsday and pass
the turn building the following:

:::row{variant=PILE}
IU
EoA
LP
Island
TO
:::

This pile only actually casts two spells on the turn after resolving Doomsday.
Ideas Unbound and the Thassa's Oracle itself. You can also utilise piles of just
three cycling effects or add in Cavern to the mix to protect against other
effects should it be desired.

### Direct Damage

:::row{variant=CENTERED}
Price of Progress
Fireblast
Lightning Bolt
:::

We usually joke that Doomsday players start the game with only 10 life. However
it becomes very serious quite fast in matchups with a lot of cheap reach in the
form of direct damage. For instance, if you cast Doomsday from nine life or less
you are weak to :card[Fireblast] once the Doomsday resolves as soon as you give
up priority and likewise from seven life or less you are at risk of dying to
:card[Lightning Bolt]. You also have to be mindful of when you can incorporate
the use cyclers that cost life, fetchlands or even :card[Force of Will]. Note
that if you cast Doomsday when on one life you will immediately lose due to the
rounding up clause of the life loss.

### Mill Effects

:::row{variant=CENTERED}
Trenchpost
Thought Scour
Pdt
Ipnu Rivulet
:::

Thought Scour is not normally a common card in Legacy now that the
:card[Underworld Breach] era is gone however it can still show up in rogue brews
from time to time. Predict has also disappeared from both Miracles and Doomsday
lists but the occasional High Tide pilot might get you. Cards like Thought Scour
and Predict can target any player and so can mess up your piles at instant
speed, milling a key piece in response to a cantrip or potentially forcing you
to unknowingly _deck_ yourself with an empty library. With Ipnu Rivulet being
particularly brutal, you can try to take similar considerations when facing
Grindstone in either baiting the known activation or taking a bit more time to
play around it.

### Targeted Draw Effects

:::row{variant=CENTERED}
Kozilek's Command
Dack Fayden
Cephalid Coliseum
Baleful Mastery
:::

Kozilek's Command can be very deadly as it can both reduce your devotion to {U}
and make you draw a card. At instant speed and as per your opponent choice no
less! However it is quite simple to play around it if you can plan in advance:
with a cycler in hand for instance, this is a removal interaction that can be
played around by leaving 1 card in the pile. If they target you with the
mode that make you draw you don't need to use your cycler, and if they don't and
instead opt to only exile the Oracle then you still have the opportunity to draw
the last card of the pile.

Cephalid Coliseum is a lot more difficult to navigate through but does require
them to reach _Threshold_ and is therefore sensitive to sideboard cards you will
bring in. Winning with 2 Oracles and 4 devotion to {U} is the straightforward
option but :card[Jace, Wielder of Mysteries] is equally resolutive albeit more
costly.

### Fateseal Effects

:::row{variant=CENTERED}
Jace, the Mind Sculptor
Portent
Natural Selection
:::

These are only relevant when building a pass-the-turn pile. Jace is likely the
more common one to face and is easily beaten by placing an otherwise
innocuous cantrip as the top card.

### Instant-Speed Discard Effects

:::row{variant=CENTERED}
Vendilion Clique
Kolaghan's Command
:::

Both of these cards tend to come from forgotten control shells. Command is
likely more disruptive but can be played around assuming you are able to ensure
you have one additional card in hand than needed. Often this means not being
able to utilise :card[LED] however you can otherwise treat it like any other
pile where you need to keep countermagic up. Clique is tricky when trying to
utilise cards like Predict or Ideas Unbound but is relatively superfluous if
executing something with just cantrips. You can also build a pile around it _if_
you can predict when the opponent will use it however that can be tricky. be
mindful of timing for your opponent being able to _snipe_ an LED with the
artifact destruction mode.

### Stifle Effects

:::row{variant=CENTERED}
Consign to Memory
Stifle
Trickbind
Tishana's Tidebinder
:::

These effects are all effects that seek to prevent the Thassa's Oracle trigger
from resolving. You will need some sort of interaction, either countermagic or
discard. Discard is very powerful in those matchups as the information gained is
very valuable and will help setup piles where 2 Oracles are necessary in order
to burn through the opposing interaction.

### Humility Effects

:::row{variant=CENTERED}
Torpor Orb
Dress Down
Doorkeeper Thrull
:::

These permanent-based lock pieces used to be handled with bounce spells from the
sideboard however some of them now having Flash makes it somewhat unreliable.
They interact with Oracle by preventing the trigger to ever reach the stack and
therefore require a different approach. For instance, discard won't necessarily
take care of Dress Down as they can simply cast it in response forcing you to
pass the turn. The rise of the Stiflenought archetype has made some pilots go as
far as listing :card[Jace, Wielder of Mysteries] or less commonly
:card[Laboratory Maniac] in order to completely bypass both Stifle effect and
ETB-hate.

### Endurance Effects

:::row{variant=CENTERED}
Endurance | MH2
Thran Foundry
Terminus
:::

Generally speaking, beating Endurance(s) and similar effects involves one or
more insurances amongst the following:

- Simply countering the card
- An abnormally high devotion to {U} to compensate for the new library size
- Preventing cards to be put back in your library

With enough resources, you could put permission in your pile in the form of
:card[Pact of Negation] or even :card[Subtlety]. Do know however that your
opponents will usually be able to tell how many Forces you're holding with the
exile pile being public to both players.

As seen in other pile examples, blue permanents or double Oracle piles can be
enough to simply ignore 1 such effect but that might not be enough if you're
looking to beat 2 copies of Endurance from your opponent for instance.

To make your life easier you should avoid putting things in your graveyard in
the first place: with the initial Doomsday already there, if you can limit your
discarding to just 1 extra card, that means their first Endurance will put back
at most 2 cards making a perfect pile simply become an imperfect pile with the 2
devotion count from the Oracle. That means you should prefer things that draw
more with little waste like :card[IU] and avoid cards that put themselves in the
graveyard like :card[LP] and cyclers. Beating 2 copies of Endurance in the same
turn requires more initial {U} mana but is definitely possible:

> PTT + {U}{U}{U}

:::row{variant=PILE}
IU
SW
TO
Island
SW
:::

Another option is to exile your graveyard in response to the Endurance effect.
Anti-graveyard sideboard choices like :card[Relic of Progenitus] or
:card[Tormod's Crypt] can double as Endurance insulation by putting them in the
pile or by drawing them naturally.

## Deciding When to Pass the Turn

One of the hardest tricks to master is the judgement of when to utilise a PTT or
slow pile and when to go for it in the face of possible interaction. There is no
hard science to this judgement but it does depend on the resources you have
available to you, the suspected interaction the opponent has and the degree of
_pressure_ they are imposing on you with their own gameplan (are they likely to
be able to win if given the extra turn or turns?). This is something you will
get better with as you accrue experience and learn the rest of the metagame
along with your own deck.

## Final Thoughts

There are a number of things that you may face and the ability to deal with it
comes from research and practice. Remember to always assess the matchup in
playing around Wasteland, opposing Thoughtseize effects, Daze and the like prior
to the combo to give yourself the best chance to enact the combo. Think about
which of speed or resilience is the right path given your opponent's deck.

Because of the size of the Legacy card pool and the variance between decklists,
even within proven archetypes, you can often face strange or unexpected corner
cases. Just try your best to make note of what you are aware of, play around
what you can but be mindful that sometimes you cannot play around everything and
need to accept if they have the one corner case card.

## Next Steps

Now we have a lot of piles under our belt it is time to think on what sort of
deck construction we are looking for. In the next section we shall discuss the
deck building and the theorycrafting behind it to help you try and work out what
sort of Doomsday list you want to play.
