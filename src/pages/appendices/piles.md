# Doomsday Pile Document

This document serves as a guide to beginning Doomsday players (the Doomsday
storm deck in the Legacy Format of Magic: The Gathering).

This document is deliberately not an exhaustive list of all the Doomsday piles
that you can build. The current collection of piles in this document is intended
to illustrate what combinations of resources lead to what kind of piles and
storm counts. It important to develop an intuition for this as you will often
find that you are sculpting your hand to play towards a set of resources that
allow you to combo off. I think that reading through a pile document and trying
out the piles that are there helps in building such an intuition.

Over time more in depth discussion of certain thought processes or pile building
styles will be added as more members of the Doomsday community contribute them.
These discussions will provide more explanation into some of the key concepts of
a certain pile collective and explain the step by step run through of how to run
through them.

Some piles are designed to win via other methods other than lethal Tendrils of
Agony. These piles will not have a storm count associated with them as it would
not be required for them.

This document is licensed under
[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)

## Notation

| Shorthand | Cardname           |
| --------- | ------------------ |
| TW        | Three Wishes       |
| AoI       | Act on Impulse     |
| IU        | Ideas Unbound      |
| LED       | Lion's Eye Diamond |
| GP        | Gitaxian Probe     |
| BW        | Burning Wish       |
| ToA       | Tendrils of Agony  |
| LM        | Laboratory Maniac  |
| BS        | Brainstorm         |
| P         | Ponder             |
| LP        | Lotus Petal        |
| DD        | Doomsday           |
| DR        | Dark Ritual        |
| IC        | Infernal Contract  |
| CB        | Conjurer's Bauble  |
| SI        | Shelldock Isle     |

Mana costs are represented as follows:  
W White - U Blue - B Black - R Red - G Green  
1 one generic mana  
BBB means three black mana  
1UU means two blue mana and one generic mana  
X means a variable amount of generic mana

Consider the following example of a Doomsday pile in this notation:

```
-> IU, LED, GP, LED, BW(ToA) BBB+1UU (6) 8 Storm
```

This means that IU is the top card and BW is the bottom card. BBB+1UU represents
the mana cost, (6) is the converted mana cost. 8 Storm represents the amount of
storm that executing this pile will generate, this includes the Doomsday you've
cast to create this pile as well as the Tendrils of Agony (including the
non-copy original spell) at the end of the pile. The original Tendrils is
included for simplicity, because we simply count to ten if we want to cause 20
lifeloss. I will frequently leave out the wishtarget for BW at the end of the
pile, because it is obvious that it is used for Tendrils of Agony.

## Three Wishes / Act on Impulse Piles:

### Basic Piles

```
GP in hand:
-> TW, GP, GP, LED, LM               BBB+1UU (6)
-> TW, LED, LED, GP, BW              BBB+1UU (6)     8 Storm

-> AoI, GP, GP, LED, LM              BBB+2R (6)
-> AoI, LED, LED, GP, BW             BBB+2R (6)      8 Storm

2x GP in hand:
-> LED, TW, LED, GP, LM              BBB (3)
-> LED, TW, LED, LED, BW             BBB (3)         9 Storm
```

### Brainstorm Piles

```
BS + TW/GP in hand: -> GP/TW, LED, LED, GP, LM BBB+U (4) -> GP/TW, LED, LED,
LED, BW BBB+U (4) 9 Storm

BS + ToA:
-> GP, LED, TW, LED, LED             BBB+U (4)       8 Storm

BS + BW:
-> TW, GP, LED, LED, LED             BBB+U (4)       9 Storm

BS + LM
-> TW, GP, LED, GP, LED              BBB+U (4)
```

### TW/AoI in hand piles

```
TW in hand:
-> LED, GP, GP, GP, LM               BBB+1UU (6)
-> LED, LED, GP, GP, BW              BBB+1UU (6)     8 Storm

TW + GP in hand:
-> LP, LED, GP, GP, LM               BBB+1U (5)
-> LP, LED, LED, GP, BW              BBB+1U (5)      9 Storm

AoI + GP in hand:
-> LP, LED, GP, GP, LM               BBB+2 (5)
-> LP, LED, LED, GP, BW              BBB+2 (5)       9 Storm
```

## Ideas Unbound Piles

### Basic piles

```
GP:
-> IU, GP, CB, LED, LM               BBB+1UU (6)
-> IU, GP, LED, LP, ToA              BBB+UU (5)      7 Storm
-> IU, GP, LED, LED, BW              BBB+UU (5)      8 Storm

2x GP:
-> LED, IU, LP, GP, LM               BBB+1 (4)
-> LED, IU, LP, DR, ToA              BBB (3)         8 Storm
-> LED, IU, LP, LED, BW              BBB+1 (4)       9 Storm
```

### Brainstorm piles

```
BS + 1 card -> IU, GP, LED, DR, ToA BBB+BU (5) 7 Storm -> IU, GP, LED, LED,
BW BBB+1UR (6) 8 Storm

BS + Tendrils:
-> IU, GP, LED, LP, DR               BBB+U (4)       8 Storm
-> IU, BS/P, LED, LP, DR             BBB+UU (5)      8 Storm

BS + BW:
-> IU, GP, LED, LED, LP              BBB+1U (5)      9 Storm

BS + BW + GP:
-> IU, LED, LED, LED, LED            BBB+U (4)       10 Storm

BS + GP + 1 card:
-> IU, LED, LED, LED, BW             BBB+U (4)       9 Storm
```

### Ideas Unbound in hand piles

```
Ideas Unbound: -> GP, GP, CB, LED, LM BBB+1UU (6) -> GP, LED, LED, P, ToA
BBB+UU (5) 7 Storm -> GP, LED, LED, GP, BW BBB+UU (5) 8 Storm

BS + Ideas Unbound:
-> GP, LED, DR, CB, LM               BBB+UB
-> GP, LED, LP, DR, ToA              BBB+U (4)       8 Storm

BS + Ideas Unbound + 1 card:
-> GP, LED, LED, CB/GP, LM           BBB+U (4)
-> GP, LED, LED, LED, BW             BBB+U (4)       9 Storm

BS + Ideas Unbound + GP:
-> LED, LED, GP, X, LM               BBB+U (4)
-> LED, LED, LED, LED, BW            BBB+U (4)       10 Storm

GP + Ideas Unbound:
-> LP, LED, GP, CB, LM               BBB+1U (5)
-> LED, LED, GP, CB, LM              BBB+UU (5)
-> LP, LED, LED, GP, ToA             BBB+U (4)       8 Storm
-> LP, LED, LED, GP, BW              BBB+U (4)       9 Storm
```

## Piles without D3 or D4

```
BS + 2 cards: -> BS/P, LED, LED, BS/P, ToA BBB+UU (5) 7 Storm -> BS/P, LED,
LED, BW, X BBB+UU (5) 7 Storm

BS + BS/Ponder + 2 cards:
-> LP, LED, LED, BS/P, ToA           BBB+U (4)       8 Storm
-> LP, LED, LED, BW, X               BBB+U (4)       8 Storm

BS + GP + 2 cards:
-> LP, LED, LED, BS/P, ToA           BBB+U (4)       8 Storm
-> LP, LED, LED, BS/P, BW            BBB+U (4)       9 Storm

BS + BW + 1 card:
-> GP, LED, LED, X, X                BBB+U (4)       7 Storm

BS + GP + 1 card:
-> BW, LED, LED, X, X                BBB+U (4)       7 Storm
-> GP, GP, BW, LED, LED              BBB+U (4)       9 Storm

GP + BW + 1 card:
-> BS, GP, LED, LED, X               BBB+U (4)       8 Storm
-> GP, BS, GP, LED, LED              BBB+U (4)       9 Storm

BS + BW + GP + 1 card:
-> LP, GP, LED, LED, X               BBB (3)         9 Storm
```

## Piles with Infernal Contract/Cruel Bargain SB

```
BW:
-> GP, LP, LED, LED, ToA             BBB+1BBBR (8)   8 Storm
-> GP, LP, LED, LED, BW              BBB+1BBBR (8)   9 Storm

BS/P + BW:
-> LED, LP, DR, DR, ToA              BBB+1UR (6)     9 Storm
-> LED, LP, LED, LED, BW             BBB+2UR (7)     10 Storm

GP + BW:
-> LED, LP, DR, DR, ToA              BBB+1R (5)      9 Storm
-> LED, LP, LED, LED, BW             BBB+2R (6)      10 Storm
```

## Piles with Ideas Unbound SB

```
BW:
-> LED, LED, GP, Ponder, ToA         BBB+1RUU (7)    8 Storm
-> LED, LED, GP, GP, BW              BBB+1RUU (7)    9 Storm

BW + BS/Ponder:
-> LED, LED, LED, GP, BW             BBB+1RU (6)     10 Storm

BW + GP:
-> LED, LED, LED, GP, BW             BBB+1R (5)      10 Storm

Brainstorm + BW + 1 card:
-> GP, LED, LED, LED, BW             BBB+1U (5)      9 Storm
```

## Karakas Piles/Kill Spell Piles:

For these piles you can replace Karakas with any kill or removal spell, such as
Slaughter Pact, Chain of Vapor or Deathmark and increase storm by 1, don’t
forget to add the cost of the spell to the cost listed here.

```
GP in hand:
-> IU, LED, GP, Karakas, ToA            BBB+1UU (6)  6 Storm
-> TW, LED, GP, Karakas, ToA            BBB+2UU (7)  6 Storm
-> AoI, LED, GP, Karakas, ToA           BBB+3R  (7)  6 Storm

GP + BW(IC):
-> LED, Karakas, DR, LP, ToA            BBB+2R (6)   8 Storm

GP + BW(AoI)
-> LED, Karakas, LED, GP, ToA           BBB+2R (6)   8 Storm
```

## Double-Doomsday Piles

Double-Doomsday piles have become much less attractive with the banning of
Sensei's Divining Top. Much of the high storm count of these piles was due to
replaying SDT again and again, Gitaxian Probe can provide some free draws, but
the cost in mana/life becomes pretty high.

Costs written as [x/y] means you have to pay either.

```
GP + LED:
-> TW, LED, GP, DD, BW              BBB+[1UU/BBB] (6)   13 Storm
-> TW, LED, LED, GP, BW

-> AoI, LED, GP, DD, BW             BBB+[2R/BBB] (6)    13 Storm
-> AoI, LED, LED, GP, BW

TW:
-> LED, GP, DD, LED, BW             BBB+1UU (6)         10 Storm
-> TW, LED, LED, BW, X

TW + GP:
-> LED, LED, GP, DD, BW             BBB+1UU (6)         13 Storm
-> TW, LED, LED, GP, BW

CB in play + GP:
-> IU, LED, LED, BW, BW             BBB+1UUR (7)        13 Storm
-> IU, LED, GP, LED, BW
```

## Doomsday-Time Spiral Piles

For these piles you sometimes need some cards in hand or post-Doomsday
graveyard, to prevent decking yourself when casting TS. Remember that Doomsday
is always in your post-Doomsday graveyard and that the Burning Wish used to wish
for Time Spiral, as well as Time Spiral are exiled. Mana cost in square brackets
[ ] can be paid using your lands after they were untapped by Time Spiral.

```
GP + 1 card:
-> IU, LED, LED, BW, BW              BBB+1UUR+[1R] (7)   11 Storm

GP + LED:
-> IU, LED, LED, BW, BW              BBB+UU+[1] (5)      13 Storm
-> IU, LED, LED, BW, BW              BBB+R+[1R] (4)      13 Storm

GP + IU in hand:
-> LED, LED, LED, BW, BW             BBB+UU+[1] (5)      13 Storm

2x GP in hand + BW in hand or post-DD graveyard:
-> LED, IU, LED, LED, BW             BBB+R+[1R] (4)      14 Storm
-> LED, IU, LED, LED, BW             BBB+1R+[1] (5)      14 Storm

BS in hand + 2 cards:
-> P, LED, LED, BW, BW               BBB+2UU+[1R] (7)    11 Storm

BS/Ponder + Brainstorm + 2 cards:
-> LED, LED, LED, BW, BW             BBB+UU+[1] (5)      13 Storm

BS + BW + GP:
-> LED, LED, BW, LP, LP              BBB+2U+[1] (6)      13 Storm

BS + GP + 1 card:
-> LED, LED, BW, BW, LP              BBB+2U+[1] (6)      12 Storm
```

## Pass the turn Piles using Time Spiral

For these piles you sometimes need some cards in hand or post-Doomsday
graveyard, to prevent decking yourself when casting TSP. Remember that Doomsday
is always in your post-Doomsday graveyard and that the Burning Wish used to wish
for Time Spiral, as well as Time Spiral are exiled.

```
2 cards in hand or graveyard:
-> IU, LED, LED, BW, BW              1UUR (4)     9 Storm
-> TW, LED, LED, BW, BW              3UU  (5)     9 Storm
-> AoI, LED, LED, BW, BW             4R   (5)     9 Storm

LED in play + 1 card:
-> IU, LED, LED, BW, BW              UU   (2)     10 Storm
-> TW, LED, LED, BW, BW              1UU  (3)     10 Storm

IU in hand + 1 card:
-> LED, LED, LED, BW, BW             UU   (2)     11 Storm

TW in hand + 1 card:
-> LED, LED, LED, BW, BW             1UU  (3)     11 Storm
```

Essentially you want your draw spell + 2 LEDs + 2 BWs as 5 cards, so you may
have any of these in hand or post-DD graveyard as long as you can resolve
Burning Wish->Time Spiral.

## Pass the turn Piles for double-Doomsday

Costs written as [x/y] means you have to pay either.

```
LED in play:
-> TW, LED, GP, DD, BW              1UU (3)         9 Storm
-> TW, LED, LED, BW(ToA), X

-> IU, LED, CB, DD, BW              1UU (3)         9 Storm
-> IU, LED, LED, BW(ToA), X
```

## Pass the turn Piles using Chain of Vapor

```
GP in hand:
-> IU, LED, LED, CoV, BW             UUU (3)      9 Storm

LED in play:
-> IU, LED, GP, CoV, BW              UUU (3)      8 Storm

BW + GP + 1 card:
-> GP, BS, LED, LED, CoV             UU (2)       10 Storm
```

## Pass the turn piles with Laboratory Maniac

```
Nothing:
-> TW, LED, GP, GP, LM               1UU          4 life

LED in play:
-> GP, TW, LED, GP, LM               0            4 life

GP in hand:
-> LED, TW, LED, GP, LM              0            4 life
```

### Chromatic Sphere (CS) piles

```
Nothing:
-> IU, CS, LED, GP, LM               2UU          2 life

LED:
-> GP, IU, CS, DR, LM                1B           2 life

GP in hand:
-> LED, IU, CS, DR, LM               1B           2 life
```

### Lab Man pass the turn with protection

Different piles are listed for different purposes. Some piles play around a
single counterspell or any single card in hand. Some variants only play around
removal on Lab Man. In these piles I use Silence, this can obviously be replaced
with any other spell if you prefer.

```
GP in hand:
-> Silence, IU, LP, GP, LM           W+2UU        4 life
-> Silence, TW, LED, GP, LM          W+1UU        4 life
-> Silence, AoI, LED, GP, LM         W+2R         4 life
-> LED, IU, Silence, GP, LM          W+2          4 life

LED:
-> GP, IU, Silence, GP, LM           W+2          4 life
-> GP, TW, Silence, GP, LM           W+2U         4 life
```

## Conjurer's Bauble (CB) piles

These piles generally require a CB to be in play post DD. They either use the CB
or another cantrip to draw into the pile and have the option of looping CBs for
additional storm.

```
GP in hand: -> CB, TW/AoI, LED, CB, BW BBB+[1UU/2R]+2+X (5) 9+X Storm

CB in play: -> IC, LED, LED, CB, BW BBB+BBB1+X (7+X) 7+X Storm -> IC, LED, LED,
CB, ToA BBB+BBB1+X (7+X) 8+X Storm -> GP, TW/AoI, LED, CB, BW BBB+[1UU/2R]+1+X
(7+X) 8+X Storm -> GP, TW/AoI, LED, CB, ToA BBB+[1UU/2R]+0+X (6+X) 8+X Storm

CB in play. GP in hand: -> IU, LED, LED, CB, BW BBB+UU1+X (6+X) 8+X Storm -> IU,
LED, LED, CB, ToA BBB+UU1+X (6+X) 9+X Storm -> LED, TW/AoI, LED, CB, BW BBB+1+X
(4+X) 9+X Storm -> LED, TW/AoI, LED, CB, ToA BBB+X (3+X) 9+X Storm

-> IU, LED, LED, BW, BW BBB+1UUR (7) 13 Storm -> IU, LED, Cantrip, LED, BW

CB in play + 2 GP in hand: -> LED, IU, LED, LED, BW BBB+0 (3) 10 Storm -> LED,
IU, LED, LED, ToA BBB+0 (3) 9 Storm

CB in play. BW in hand: -> IU, LED, LED, GP, CB BBB+UU1+X (6+X) 8+X Storm -> IC,
LED, LED, LED, CB BBB+BBB1+X (7+X) 11+X Storm -> BS, TW/AoI, CB, LED, LED
BBB+2U+X (6+X) 10+X Storm -> BS, TW/AoI, CB, LED, LED BBB+1U (5) 9 Storm

CB in play. ToA in hand:
-> IU, LED, LED, GP, CB              BBB+UU1+X  (6+X)        9+X Storm
-> IC, LED, LED, LED, CB             BBB+BBB1+X (7+X)        12+X Storm
-> BS, TW/AoI, CB, LED, LED          BBB+1U+X   (5+X)        10+X Storm

CB in play. Cantrip + BW in hand:
-> LED, IU, LED, LED, CB             BBB+0+X  (3+X)          9+X Storm
-> LED, IC, LED, LP, CB              BBB+0+X  (3+X)          10+X Storm
-> LED, IC, LED, Duress, CB          BBB+B1+X (5+X)          10+X Storm
-> LED, IC, LED, LED, CB             BBB+1+X  (4+X)          13+X Storm
-> BS, TW/AoI, LED, LED, CB          BBB+U+X  (4+X)          13+X Storm

CB in play. Cantrip + ToA in hand:
-> LED, IU, LED, LED, CB             BBB+0+X  (3+X)          10+X Storm
-> LED, IC, LED, LP, CB              BBB+0+X  (3+X)          11+X Storm
-> LED, IC, LED, Duress, CB          BBB+B1+X (5+X)          11+X Storm
-> LED, IC, LED, LED, CB             BBB+1+X  (4+X)          14+X Storm
-> BS, TW/AoI, LED, LED, CB          BBB+U+X  (4+X)          14+X Storm

2 Cantrips + BW in hand:
-> LED, IU, LED, LED, CB             BBB+0      (3)          10 Storm
-> LED, TW/AoI, LED, LED, CB         BBB+1      (4)          10 Storm

2 Cantrips + ToA in hand:
-> LED, IU, LED, LED, CB             BBB+0      (3)          9 Storm
-> LED, TW/AoI, LED, LED, CB         BBB+1      (4)          9 Storm

CB in play. IU in hand:
-> LED, LED, GP, CB, BW              BBB+UU     (5)          11+X Storm
-> LED, LED, GP, CB, ToA             BBB+UU     (5)          12+X Storm

CB in play. TW/AoI in hand:
-> BS, LED, LED, CB, BW              BBB+1U     (5)          9 Storm
-> BS, LED, LED, CB, ToA             BBB+1U+X   (5+X)        10+X Storm

CB in play. IC in hand:
-> LED, LED, LP, CB, BW              BBB+BBB+X  (6)          9+X Storm
```
