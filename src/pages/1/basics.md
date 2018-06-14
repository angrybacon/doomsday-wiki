# The Basics

This section explains the basic Doomsday piles that attempt to end the game
directly with a lethal Tendrils of Agony. Fortunately, these piles will also be
the piles that you will execute most frequently and likely win most of your
games with.

There will however, be times where you will build piles that win with Laboratory
Maniac, or build up a higher Storm count with a Time Spiral or double-Doomsday
pile, or build a pile that plays around Pyroblast on one of your draw spells, or
even optimize for the highest probability of being successful against a Surgical
Extraction in your opponent's hand.

Before this becomes too intimidating, let's first consider the most simple
Doomsday piles. And since this is the starting point for reading about Doomsday
piles in general, we will first explain a bit about the notation that we use
when writing down piles.

## Notation

Mana costs are represented as follows:  
W White - U Blue - B Black - R Red - G Green  
1 one generic mana  
BBB means three black mana  
1UU means two blue mana and one generic mana  
X means a variable amount of any generic mana

---

Consider the following example of a Doomsday pile in this notation:

```
GP in hand.
-> IU, LED, GP, LED, BW(ToA)                BBB+UU (5)   8 Storm
```

This means that IU is the top card and BW is the bottom card. BBB+UU represents
the mana cost, (5) is the total converted mana cost required to complete the
pile. 8 Storm represents the amount of Storm that executing this pile will
generate, this includes the Doomsday you've cast to create this pile as well as
the Gitaxian Probe and the Tendrils of Agony (including the non-copy original
spell) at the end of the pile. The original Tendrils is included for simplicity,
because we simply count to ten if we want to cause 20 lifeloss. I will
frequently leave out the wish target for BW at the end of the pile, because it
is obvious that it is used for Tendrils of Agony.

## Basic Doomsday Piles

The Doomsday piles that we will explain here are all based on using either Ideas
Unbound or Three Wishes as the big draw spell. We will first consider the single
cantrip piles, followed by the double cantrip piles.

There are some key rules you can use to help remember things like Storm count.
If the intended pile is meant to win without passing the turn then you always
have 1 Storm to begin with from Doomsday itself. Additionally if you plan on
casting all cards used in the Doomsday pile then you get to add 5 Storm from
that. Breaking down the card sets of pre-pile, pile and wish targets helps the
mind easily compute what Storm count you will end up with from a certain line of
play.

### Single Cantrip Piles

There are basically two variants to this pile. You either have a spell that
draws a single card in hand ready to cast, or a Conjurer's Bauble in play. For
the moment, the difference does not really matter and we'll just assume that you
have a castable GP in hand, either with 2 life or by taking into account the
extra U cost.

#### Ideas Unbound

```
GP in hand.
-> IU, LED, GP, LED, BW(ToA)                BBB+UU (5)   8 Storm
```

1. Cast Doomsday build: [IU, LED, LED, GP, BW]
2. Cast GP, draw (IU)
3. Cast IU, draw (LED, LED, GP)
4. Cast LED
5. Cast LED
6. Cast GP, hold priority crack LEDs for BBB+RRR, draw (BW)
7. Cast BW targeting ToA
8. Cast ToA

This pile has cost you BBB+UU and 4 life and results in 8 Storm, that is 16
lifeloss. Note that UU is often paid for by a Lion's Eye Diamond. With a Dark
Ritual (to cast Doomsday) and a Lion's Eye Diamond preceding the Doomsday you
already generate enough Storm to cause 20 lifeloss. If you are low on life
you'll need more mana to cast GP with actual mana instead of life.

As for the remarks about priority in step 6, It's best to announce that you
would like to hold priority when casting the next spell, before you actually
announce which spell that is. This way there can be no discussion about that you
waited too long between announcing the spell and stating that you want to hold
priority after casting it. This may be a bit overly cautious, but there's no
harm and in this way you can avoid discussions during tournament play.

#### Three Wishes

```
GP in hand.
-> TW, LED, GP, LED, BW(ToA)                BBB+1UU (6)   8 Storm
```

1. Cast Doomsday build: [TW, LED, LED, GP, BW]
2. Cast GP, draw (TW)
3. Cast TW, exile (LED, LED, GP)
4. Cast LED
5. Cast LED
6. Cast GP, hold priority crack LEDs for BBB+RRR, draw (BW)
7. Cast BW targeting ToA
8. Cast ToA

This pile costs BBB+1UU and 4 life and results in 8 Storm, which is 16 lifeloss.
Like with Ideas Unbound, the mana cost for the draw spell (1UU) can be - and
often is - paid for by a Lion's Eye Diamond in response to the first GP. The
most important difference is that Three Wishes does not actually draw but exiles
the cards. This means that Lion's Eye Diamond's activation cost will not affect
your ability to cast the cards 'drawn' with Three Wishes. If you are low on
life, you can also build [TW, LED, LED, BW, X] and directly 'draw' Burning Wish
with Three Wishes. This will produce one less Storm however it does let you
'hide' a card in your Doomsday stack from your opponent.

### Double Cantrip Piles

#### Ideas Unbound

```
GP, GP in hand.
-> LED, IU, LP, LED, BW(ToA)                BBB+1 (4)   9 Storm
```

1. Cast Doomsday build: [LED, IU, LP, LED, BW]
2. Cast GP, draw (LED)
3. Cast LED
4. Cast GP, hold priority crack LED for UUU, draw (IU)
5. Cast IU, draw (LP, LED, BW)
6. Cast LP
7. Cast LED
   - Crack LP for R
8. Cast BW targeting ToA, hold priority crack LED for BBB
9. Cast ToA for 9 Storm.

This pile has cost only BBB+1 and 4 life to execute and results in 9 Storm,
which is 18 lifeloss. This pile is quite efficient when it comes to mana. We use
the additional cantrip to draw a Lion's Eye Diamond before executing the rest of
the pile and use that Lion's Eye Diamond to pay for much of the rest of the
pile. We basically turn our additional Gitaxian Probe into a Lion's Eye Diamond
with Doomsday.

One difficulty with this pile is that Ideas Unbound actually draws Burning Wish
before we can sacrifice the second Lion's Eye Diamond in the pile to produce red
mana. Therefore, one of the Lion's Eye Diamonds in the pile is replaced with a
Lotus Petal, which together with one blue mana left from the first Lion's Eye
Diamond pays for the Burning Wish. The second Lion's Eye Diamond is sacrificed
for three black mana and pays for all but 1 mana of Tendrils of Agony.

#### Three Wishes

```
GP, GP in hand.
-> LED, TW, LED, LED, BW(ToA)                BBB (3)   9 Storm
```

1. Cast Doomsday build: [LED, TW, LED, LED, BW]
2. Cast GP, draw (LED)
3. Cast LED
4. Cast GP, hold priority crack LED for UUU, draw (TW)
5. Cast TW, exile (LED, LED, BW)
6. Cast LED
7. Cast LED
   - Crack LEDs for BBB RRR
8. Cast BW targeting ToA
9. Cast ToA for 9 Storm.

This pile is very efficient at BBB and 4 life for 9 Storm. The key idea is that,
strictly speaking we only needed TW, LED, LED, BW in our single cantrip pile.
Meaning that if we shift this 4 card pile to the bottom, we can put any card on
top. In this case we put a Lion's Eye Diamond on top, which we draw with
Gitaxian Probe. The Lion's Eye Diamond then pays for the Three Wishes, which
exiles the other two LEDs and the Burning Wish we need to produce mana, wish for
Tendrils of Agony and cast it.

## Variations

That's it for the basic and most common piles that end with Tendrils of Agony.
There are many variations of each pile and it doesn't really make sense to list
them all. In each of the above piles you may replace Gitaxian Probe with a
Ponder, or simply use blue mana to pay for it rather than 2 life. Also, since
Act on Impulse and Three Wishes function very similarly, all piles involving
Three Wishes can be executed with Act on Impulse all the same, except for a
different mana cost. The use of Conjurer's Bauble to draw into the piles allows
for lower mana or life costs but does result in less Storm being generated
during the play line.

The most important part of learning how to cast Doomsday, is to think how you
would like to cast a lethal Tendrils of Agony, and then think of the cards
you'll need to get there. Doomsday is essentially a 5 cards tutor.

The trick is to try not to think of the specifics too much. Try to break
everything down into resources. The key ones are the cards you hold in hand, the
mana available, any other cards in play like Conjurer's Bauble and your deck
construction. As you get more familiar with these factors you can then start to
consider your opponent as a factor and become more experienced in generating
piles on the fly to fit whatever gameplay scenario you might come across.

As for the other piles out there, there are countless piles that use Brainstorm
to draw some cards and put some other cards back. This particular trick allows
you to exchange cards in hand with cards that you've tutored up with Doomsday.
As you can imagine this results in a large number of combinations of
Brainstorm + some other cards in hand that enable different Doomsday piles for
different mana costs and Storm counts.

## Summary

1. You generally need a card to draw or exile three cards into your stack.
2. Lethal Storm via Tendrils of Agony is the most common win condition for the
   deck.
3. Holding priority when cantripping with LED in play is key, make sure to get
   into this habit.

## Get Started

You now have sufficient information to start practicing! Just take a proven
decklist and start goldfishing trying to figure out what piles to build and how
to execute them. There are several documents available that list Doomsday piles
which you can use to get to know more piles. These are very important tools when
learning how to play the deck.  
See the [DDFT Pile
Document](https://github.com/Bennotsi-MTG/ddft-pileDoc/blob/master/README.md)
for a more basic list of different piles.
