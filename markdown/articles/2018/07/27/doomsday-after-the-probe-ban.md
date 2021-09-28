---
authors: d8dk32
title: Doomsday after the Probe Ban
---

The banning of Gitaxian Probe was brutal. I can't think of another word to
describe it. For other Storm decks, Probe was simply a powerful card, too good
not to play. For Doomsday, it was integral to the function of the deck. Beyond
providing information and a cantrip, it was critical in many piles. Without it,
most piles cost at least 1 mana more, or generate 1 less Storm if, for example,
you use an on-board Bauble to draw into your pile. This may not seem devastating
to the casual reader, but the deck is mana-hungry and often generating exactly
10 Storm, so it's certainly more of a problem than it may appear at first
glance.

After a brief period of mourning, myself and a handful of other Doomsday players
got down to the business of seeing if the deck was even remotely playable. There
seemed to be 2 schools of thought: try to replace Probe with something like more
Conjurer's Baubles or Street Wraiths, or consider taking the deck in a
completely different direction. I was in favor of the latter and took
inspiration from old Fetchland Tendrils lists circa 2010-ish. Most of these
lists looked a lot like ANT and played maybe a singleton Doomsday as an
additional engine. The first list I started playing post-ban that felt
functional looked like this:

<deck path="2018/07/ddft.pif.txt" />

It's essentially an ANT deck with a pair of Doomsdays jammed in and a couple
cards to support them, namely Infernal Contract (which turned out to be great on
its own) and a singleton Conjurer's Bauble (to enable IT -> DD lines). The idea
here is that I can win games off the power of Past in Flames as my Plan A, and
Doomsday can function more like a Plan B, providing relatively low-resource
deterministic kills that can ignore grave hate instead of relying on shitty Ad
Nauseam mana hungry tutor chains. After sideboarding it can lean into Doomsday a
bit more, including bringing in the Shelldock/Emrakul package which is good
against control decks and serviceable against decks like Show and Tell and
Eldrazi Post. Note that it doesn't play Laboratory Maniac anywhere in the 75.
The pass-the-turn piles are awkward with Infernal Contract and PiF helps you
muscle through discard so Laboratory Maniac got the boot.

The other deck list should be more familiar-looking to people who have played
Doosmday in the past:

<deck path="2018/07/ddft.bw.txt" />

This is "traditional" list with a couple Street Wraith instead of Probes. Wraith
probably isn't good enough to play the full 4 but having the free draw is
helpful, especially in pass-the-turn piles. The other notable feature of this
list is Act on Impulse and Ideas Unbound in the main. This was suggested by
someone in the Doomsday Discord as an alternative to maindeck Tendrils and
either AoI or IU. Each of these cards works better in certain types of piles and
if you're going to have 3 "dead" cards in the main, I find that the pile
flexibility of having AoI and IU is an improvement over some of the cheap
high-storm tricks you can do with maindeck ToA and Bauble loops.

With that lengthy intro out of the way, I'll get down to the meat of the
article. I played 30 matches which each of these lists, with minor variations as
I worked on sideboards and some maindeck numbers. I realize that 30 matches is
not enough to get real hard data but I think it's sufficient to see some trends
and start getting an idea of how the 2 lists compare and whether or not Doomsday
is even remotely playable without Probe. I kept detailed records of my matches
for each list using the same spreadsheet format that we've used in the past data
collection. I'll be comparing these lists and trying to gain some insight into
their strengths and weaknesses.

Before I begin, some caveats about the data:

1. Combo Turn is tracked on a 1-5+ scale, meaning games that go longer than 5
   turns are marked as 5.
2. When pass-the-turn piles are involved, the combo turn is listed as the turn
   Doomdsay was cast. Empty the Warrens is notated similarly.
3. Each deck was played against a random sampling of the format, in a
   combination of Leagues and Practice Room matches. This means that I didn't
   play against the same amounts of the same archetypes, and that there are a
   couple of "tier 3" type lists, like Parfait. I'll touch upon the archetype
   balance issue again later.

Now, to the data!

## Overall Match Winrate

**PiF DD**: 53.33% (16/30)  
**BW DD**: 53.33% (16/30)

Exactly the same. Not a lot to say here. I ran damn near 50/50 with both lists.
That is far from spectacular, but 30 matches is not a lot, and it is decent
enough that it doesn't make me want to give up on casting Doomsdays, especially
considering that I was learning to play new lists and make new piles over the
course of these 30 matches. Let's dive a bit deeper. I think there are some much
more interesting stats we can look at.

## Game Win Percentages

### Overall

**PiF DD**: 56.75%  
**BW DD**: 52.17%

The PiF version did a bit better in this category, suggesting it had a few more
2-0 wins and 1-2 losses.

### Winrate by Game

| ~      | G1     | G2     | G3     |
|--------|--------|--------|--------|
| PiF DD | 66.67% | 60%    | 28%    |
| BW DD  | 56.67% | 42.85% | 63.63% |

Frankly I'm not sure what to make of this. The PiF version had a substantially
higher G1 and G2 winrate than the BW list, but it drops off precipitously in G3
whereas the BW list actually gains substantially in G3. This is unexpected, and
is probably in part a function of the small dataset. It could also be attributed
to a better sideboard for the BW variant, but considering the space the
wishboard takes up and the fact that key interactive cards are shared by both
lists I'm not sure that adequately explains things.

## Mulls and Combo Turn

Average Mulligan  
**PiF DD**: 6.64  
**BW DD**: 6.62

Average Combo Turn  
**PiF DD**: 3.75  
**BW DD**: 3.33

There doesn't seem to be a significant difference between how well the 2 lists
mulligan. Both mulligan fairly well. The BW list is slightly faster than the PiF
list. This is likely due to it having access to Empty the Warrens in Game 1 and
not needing Threshold for Cabal Rituals.

## Winrate vs. Mulligan and Die Roll

| Mulligan | 7      | 6      | 5      |
|----------|--------|--------|--------|
| PiF DD   | 62%    | 45.45% | 33.33% |
| BW DD    | 56.25% | 52.94% | 0%     |

I wouldn't put too much stock in this, but it appears as if the PiF list is
affected more by mulligans. The BW list has a lower winrate at 7 cards but isn't
affected as much by going to 6. There weren't enough games where I mulled to 5
to get reasonable data, but I managed to win one with the PiF list.

## Winrate vs. Die Roll

| Roll   | Win    | Lose   |
|--------|--------|--------|
| PiF DD | 42.85% | 62.50% |
| BW DD  | 57.14% | 50%    |

Another surprise. The PiF list seems to fare much better on the draw, whereas
the BW list is the opposite. It's worth noting that both lists had the exact
same die roll Win% at 46.67%. In a small sample size this has the potential to
be strongly affected by what decks I happened to win or lose the roll against
but it certainly caught my eye and gives me some food for thought.

## Winrates vs. Archetypes and Disruption Categories

Rather than just drop a bunch of raw data here I'll just point out some parts
that I found noteworthy.

Against decks with Countermagic as their primary and only form of significant
disruption against us (this includes decks like Miracles, UW Stoneblade, and
also RUG delver and High Tide) the PiF DD list performed better, going 50%
against these decks. The BW DD list won just 30% of these matches. The BW list
seems weaker vs RUG Delver due to a shakier manabase and being worse against
Stifle. However the BW list also played against a few more brew-ish lists in
this category, including High Tide and a UR Control list so I'm wary of reading
too much into this result.

The BW DD list seems better vs. Hatebear decks like DnT and Maverick and I
attribute this mostly to its ability to Burning Wish for Massacre and ignore
graveyard hate and Gaddock Teeg. The PiF list won just 1 of 4 matches against
DnT, but I think this issue can be mitigated with a more focused sideboard and
better play since I have very little experience in the ANT vs DnT matchup.

Finally, I'd like to discuss a bit of archetype skew in my results. In
particular, with the BW DD list I played against a wide swath of the format,
whereas with my PiF DD list I played against a lot more fast blue combo decks,
like Show and Tell and UB Reanimator. These are both tough matchups and I lost
every single one. In a small sample size this can affect my overall win rate
significantly. If I ignore my disastrous matchups against these 2 decks, I
achieved a 64% winrate against the rest of the format which is quite
respectable. Obviously I shouldn't just ignore these decks but it suggests that
the deck could perform well if I have a good plan for them.

## Conclusion

I don't want to draw too many conclusions from this data as the sample size is
quite small so it must be taken with a grain of salt. I'm more interested in
generating some discussion. I think the BW DD list provides better game 1
flexibility and speed. The PiF DD list is smoother and more stable. And for
anyone who is thinking "Shouldn't you just play ANT if you're basically doing it
already?" it's a valid question but I like casting Doomsday and having it in the
deck got me out of a few situations I wouldn't have been able to get out of
otherwise. Like many deckbuilding decisions, it comes at a cost, which in this
case is the lack of some fast lines into ETW and Ad Nauseam. To anyone thinking
"Is the PiF list reeaally a Doomsday deck, or just ANT with some jank you
occasionally get to cast?" I did keep track of how I won my games and I won
about 30% of my games with Doomsday (this includes when I lean into it more
postboard with the Shelldock plan). If I had to pick one to take to a tournament
right now I'd probably lean towards the PiF list, mostly due to the stability of
the manabase. Anyway, I encourage anyone interested in trying to keep Doomsday
alive to try both these lists. I think they both have some potential. And if
these fail there's the always classic Rev614 Show and Tell/Doomsday hybrid.
