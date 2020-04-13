---
authors: d8dk32
banner: /assets/echo-of-eons.mh1.jpg
title: Echoes of the Past - A Doomsday Deck for the Roaring Twenties
---

2019 was a good year for Doomsday. Experimental Frenzy was integral to a massive
improvement in the playability of our deck, and myself and others had a level of
success that we frankly thought would never be possible without Gitaxian Probe.
But there was an undercurrent of displeasure, a sort of secret distaste for the
deck that no one really wanted to talk about: it wasn't as fun as it used to be.
Frenzy made most piles extremely easy, and as the deck was developed, we even
moved away from Tendrils of Agony as a wincon, relying on Jace, Wielder of
Mysteries and Collective Brutality loops. The deck was strong and good at
grinding through blue control decks, but it felt more like a Frenzy deck and
less like a Doomsday deck, much less a Storm deck.

Then in June, Modern horizons was released, and along with it {{Echo of Eons}}.
There was some discussion of it as a Burning Wish target, but the old-style
lists were seen as inferior to the Frenzy lists, and little more thought was
given to the card for a few months. As the end of the decade drew closer, Echo
decks started to creep into the metagame a bit, and I started thinking more and
more about the card. It dawned on me that if you cast Doomsday and cracked an
LED to flashback Echo of Eons, you'd have at least 7 cards (DD, LED, plus your
pile) to draw with Echo. Echo could function as a storm engine on it's own,
facilitate Doomsday piles, and recoup cards after getting disrupted. With this
in mind, I figured I wanted multiple copies maindeck. Burning Wish could let me
have effectively 7 copies maindeck, as well as provide a higher density of
wincons to hit if I was trying to storm off with Echo as my engine. Pushing
farther in this storm-based direction, I realized I'd likely want Cabal Rituals,
and this incentivized Draw 4's as my main way to draw Doomsday piles and a
tertiary storm engine. Without Act on Impulse, Jace and Lab Man are quite bad,
so I leaned further into the storm side of the deck. The final innovation came
after I was convinced that Veil of Summer was worth contorting the mana to
include. When all was said and done, I ended up on this:

<div deckfile="2020/01/ddft.burg.txt" />

## Playing the Deck

This deck and many of its play patterns should look familiar to people who
played Doomsday circa 2013, or played the Draw4 list in early 2018. Doomsday is
your primary storm engine. A very basic pile would look like \[Draw4, Petal,
Rit, Rit, ToA\]. You cast Doomsday, then cantrip into the pile, often using
Lion's Eye Diamond to generate mana for the Draw4, which draws you the mana to
cast Tendrils. The pile itself is 5 storm, so you need to cast enough spells
before Doomsday to make it lethal. You can also use Burning Wish to grab
Tendrils and add one more storm, but this costs more mana. It's important to
keep in mind that using a Draw4 in a Doomsday pile means you will be halving
your life total twice. Life total management is an important aspect of playing
Doomdsay, and if your life total goes below 4 you need to think about how to win
without needing a Draw4 in your Doomsday pile.

Using Echo of Eons in conjunction with Doomsday is where this list differs from
previous iterations. Those who played in the early days may draw some parallels
with Time Spiral piles. The first thing to remember is that when you put Echo on
the stack, you need 7 cards between your hand, grave and library so you don't
deck yourself. The second important thing to remember is that if you have more
than 7 cards leftover, you won't draw all of them. This means that you need to
either construct a pile that can win even if you don't draw certain cards, or
accept that there is a non-zero probability of losing the game. It is difficult
to enumerate all the possible combinations of setups and piles and
probabilities, but in general there are a couple patterns to these
"non-deterministic" piles. The most common is to include a cantrip (or reuse the
cantrip you used to crack into the pile) to ensure that you see all the cards
left after an Echo. It is also possible to use multiple Echoes in 1 pile,
letting you redraw your pile multiple times. This can be useful for jacking your
storm count way up in case you need to kill with Grapeshot.

I find it diffficult to get a handle on these kinds of situations without seeing
an example, so I reccomend goldfishing a bunch, but I'll try to lay out 3
scenarios that I think will demonstrate some of the Echo Pile concepts. In each
of the following examples, assume you opponent cannot interact.

**Hand:** Dark Ritual, Doomsday, Doomsday, LED, Echo of Eons  
**Board:** Swamp, Island  
You Ritual into Doomdsay and construct the following pile: \[LED, Petal, Petal,
Ponder, Burning Wish_]. Crack LED for {U}{U}{U}. Flashback Echo. At this point,
there are 8 cards left to draw from for Echo, meaning you won't draw one, but
there is no way to fail because if you don't draw the Burning Wish, you can
Ponder for it, and if you do draw it, you'll always have the mana to cast it and
ToA.

**Hand:** Dark Ritual, Doomsday, LED, Echo, Lotus Petal, Burning Wish  
**Board:** nothing  
Think of this as a turn 1 kill. Petal into Ritual into Doomsday and construct
the following pile: \[LED, LED, LED, Echo, Echo\]. Because you have a Burning
Wish in hand, you don't need to include a wincon in the pile; Echo will recycle
it for you. Crack LED for {U}{U}{U} and flashback Echo. Now there are 8 cards
you can draw from for Echo. You are guaranteed to draw at least 2 LED and at
least 1 Echo. Crack those 2 LEDs for {U}{U}{U}{R}{R}{R}, then flashback Echo.
This time there will be 7 cards leftover, so you're guaranteed to draw them all.
Cast your LEDs, then Wish for ToA.

**Hand:** Dark Ritual, Doomsday, Doomdsay, Brainstorm, Thoughtseize, Veil of Summer  
**Board:** Swamp, Island  
This pile will require a little bit of luck. Ritual into Doomsday and construct
the following pile: \[LED, LED, Echo, LED, Burning Wish\]. Cast Brainstorm to
draw 2x LED and Echo. Put back any 2 cards besides the three you just drew. Cast
the LEDs, crack them for {{UUURRR}}. Flashback the Echo. Now you will draw 7
cards from 9 remaining. You need to draw 2 LEDs and the Burning Wish to win. By
my calculation this has around a 70% chance of happening. Good odds, but
non-deterministic. As an exercise for the reader, try to think if there may be a
way to modify the pile to improve your success rate.

Using Echo as a storm engine without Doomsday is nice and straightforward: make
a bunch of mana, cast Echo, and hope you draw well. The main consideration here
is how much mana and what types you leave yourself. While it is entirely
possible to win with no mana after Echo, the more mana you have, the better your
chances to win on the spot. Ideally, you leave yourself with at least 1 red to
cast a Wish, 1 or more blue to cast any cantrips you find, and as much black as
possible since the deck is so black-hungry. Echo can also be used to simply
refill your hand, and this should not be underestimated. While you may on
occasion give your opponent all their best cards, most of the time you'll be
able to leverage your new cards better than they can.

Beyond some of these Doomsday/Echo specific ideas, the deck plays much like
other storm variants. Use your cantrips to set up for your combo turn. There is
some tension between using cantrips to find missing pieces, and needing a
cantrip to draw into a DD pile, but this is something you'll get used to in
time. Just be thoughtful with your cantrips and think about why you are casting
it, what you need to see, etc. Remember that Echoes and Wishes and even Veil can
draw into piles as well under the right conditions, so drawing multiple business
spells isn't bad. The deck is extremely business-dense too, and the other storm
engines don't require cantrips to go off, so depending on your gameplan you can
be more aggressive with your cantrips.

## Matchups and sideboarding based on broad category

### Fair Blue Decks (Slghtly Favorable, how much depends a lot on the specfic opponent)

It may seem suprising on the surface, but this deck is fine against blue decks.
Refilling a blue mage's hand or going all in on Doomsday may not seem like good
gameplans, but there is more to it than that. Veil of Summer is obviously very
good at protecting you, even if you refill their hand with Echo. Furthermore,
since the deck is so business dense, it is often possible to bait counterspells
and still have backup business. The Draw4's are solid card advantage against
slow control decks that don't apply much pressure. The high number of rituals
and access to Empty the Warrens makes Delver manageable. The deck can struggle
against Narset or Leovold, but neither option takes Empty the Warrens off the
table, and both can be killed or bounced with sideboard options. When
sideboarding for blue decks, you generally want to start by cutting Echoes. I
usually bring in 2x Empty the Warrens, and the wishable discard spell. If you
have any Abrupt Decay in your board instead of bounce spells you can consider
them as well. Against Delver I make no further changes. Against slow UWx decks,
I often cut a Ponder for the extra Draw4. Against blue control with Hymn, you
can cut Rain of Filth and Ponder for Flusterstorms. In general, when playing
against these types of decks, you want to make sure you don't fall behind on
mana, and you generally want to have multiple business spells available to help
fight through disruption of change tack if needed. Be patient and sculpt a
powerful hand while you look for an opening. Don't be afraid to make a small
number of goblins against slower control. Even if they don't win outright they
can get your opponent low and force them to spend resources dealing with the
horde while you build back up for another go.

### Permanent Based Hate Decks including Burn (Slightly Unfavorable, except DnT which is even or slightly favorable)

Generally in these matchups you win by giving your opponent as few turns as
possible. You have wishable cards to deal with a permanent or 2, but it can be
tough enough to win through one, much less multiples. Turn 1 Discard into turn 2
kill is the best option besides a turn 1 kill. It is possible to storm off into
Empty or even ToA through Chalice of the Void, so don't give up too early. Most
of these decks don't have many ways to interact with you besides with their
hateful permanents, you you are well served to jam as soon as you have an
opening. Don't waste time trying to play around things they likely don't have.
For sideboarding, you usually want to cut Veil of Summers, maybe a Ponder or 2,
and bring in your bounce spells or anything like Abrade or Abrupt Decay that you
may have. These matchups tend to be straightforward. Watchout for things that
affect your manabase, and try your best to create an opening.

### Combo Mirrors and Pseudo-Mirrors (Slightly Favorable, faster = less favorable)

This list is fast enough to have a shot against just about any other combo deck,
has strong game against discard with Veil of Summer and Echoes, and packs enough
of it's own disruption to slow the opponent down. Veil has changed the nature of
combo matchups though, so be aware of it from your opponents as well. You can
kill with Grapeshot to sidestep an opposing Veil if need be but ideally you'll
kill them without needing to Echo while they have green mana up. Sometimes, it's
best to just jam because if the game goes longer they may end up favored. For
sideboarding, you generally want to cut Rain of Filth and a Ponder or a Doomsday
for Flusterstorms. If the opponent is on Depths, bring in Chain of Vapor
instead.
