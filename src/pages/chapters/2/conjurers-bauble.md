# Conjurer's Bauble Piles

At the time of writing (July 2017) this is still a relatively new tech to play
around with. Historically Sensei's Divining Top held a place as a standard 4-of
in the deck to act as deck filtering and a 'free saved' card draw for Doomsday
piles. More information on how this was used can be found in the [Doomsday
Library](https://github.com/Bennotsi-MTG/Doomsday-Library).

Conjurer's Bauble was identified as the closest equivalent for use in Doomsday
storm or Laboratory Maniac piles that would allow a free draw that was also
resistant to having to discard as a result of using Lion's Eye Diamonds. It can
be included as a singleton copy to act as a replacement SDT element however it
has some interesting properties when multiples are available in a deck.

The most basic use of the card is of course simply as a cantrip that costs (1).
It can also be used as a free cantrip if already in play however this does of
course result in less storm being available for use. In any of the common piles
that require a non-specialist cantrip (such as Brainstorm) this can be used
instead of any others which is handy if you only have B post DD for drawing into
a pile.

## Storing a draw with CB

Let's start off by looking at the basic function of Conjurer's Bauble as simply
a tool to draw cards when using LED.

Example:

```
GP:
-> IU, CB, GP, LED, LM.                  BBB+1UU (6)
```

You should recognise the above example from the [Basics](/chapters/1/basics/)
document.  
Here you can see we can use CB to have a draw card effect present even after we
have activated our LED for mana.

This is most applicable when you have Conjurer's Bauble in your deck alongside
an additional cantrip in hand post-Doomsday. You can use the cantrip to draw
into the pile and save the Bauble draw for when you are deeper into the pile.
This is effective, especially when you have to start the pile with low mana
resources.

This is also enables things like Double Doomsday piles.

Example:

```
CB in play+GP:
-> IU, LED, LED, BW, BW                  BBB+1UUR (7)         13 Storm
-> IU, LED, GP, LED, BW
```

This has some overlap with what is described in the [Double
Doomsday](/chapters/2/double-doomsday/) document. Just as historically you could
with Sensei's Divining Top, Conjurer's Bauble may be used save the draw for the
second pile in the play line.

This simple use as a cantrip is not however the true strength of CB.

## Using CB to retrieve the 'Finisher'

This is where we start to discuss the real differences of Conjurer's Bauble and
Sensei's Divining Top. We also get to read the rest of the text on Conjurer's
Bauble other than "T, Sacrifice ~: Draw a card.", Conjurer's Bauble allows you
(as a may effect) to target a card in your graveyard and stack it at the bottom
of our deck prior to you drawing a card with it. Alongside the deck manipulation
a resolved Doomsday provides, this lets us do some nifty tricks.

The first is to ignore the downside of Lion's Eye Diamond's discard when we have
other cards in hand we need.

Examples:

```
CB in play+BW+GP:
-> LED, IU, LED, LED, GP                  BBB+0 (3)         9 Storm

CB in play+ToA+GP:
-> LED, IU, LED, LED, GP                  BBB+0 (3)         8 Storm
```

I know often you can find yourself with a key business spell in hand and no
Brainstorm to move it with. You could use the GP to draw into a Brainstorm
however that then starts adding costs to the pile. As you can see, both piles
above cost no mana beyond the initial BBB for Doomsday.

The way the piles work is to utilise CB to send the business spell back from the
Graveyard to your hand. In the first example above, you use the GP to draw into
the pile. You then play and activate the LED with the BW still in hand. With the
mana now floating you activate CB sending BW to the bottom of your deck to draw
IU. You have now created a normal -> IU, LED, LED, GP, BW pile!

We can also use this effect to play our finisher spell multiple times. Even on a
pass-the-turn pile.

Example:

```
LED in play, ToA in hand:
-> IC, DR, DR, LP, CB                   BBB+1 (4)         6+7 Storm
```

In this instance we can play ToA twice. We draw IC for our turn.

1. Cast IC, draw (DR, DR, LP, CB)
2. Cast LP
   - Crack LP for B
3. Cast DR
4. Cast DR
5. Cast CB
6. Cast ToA for 6 storm
   - Crack LED for BBB
   - Crack CB targeting ToA, draw (ToA)
7. Cast ToA for 7 storm.

This playline results in 13 copies of ToA being available off this pile. This
example does require some quite specific circumstances but it does help
illustrate tricks you can do with Conjurer's Bauble. Even a low initial storm
count of 5 for the first copy allows for a total of 11 storm in total. This is
great for when you have excess mana but low spell or card resources available.

## Using CB to extend the pile

You can use the theory of retrieving a card above to help build your pile up.
Five card decks do have limits even if we get to choose all five cards. CB
allows you to extend that to a pseudo-six cards.

Example:

```
CB in play + GP:
-> LED, IC, LED, LP, BW                 BBB+1 (4)         8 Storm
```

Normally double cantrip piles that use Infernal Contract/Cruel Bargain/Meditate
would mean that you draw yourself to death. However, with CB in the deck, you
can use the same trick as with the IU pile. Use the GP to draw into the pile.
Cast and crack the LED for BBB. You then use the CB to send the LED to the
bottom of your deck and draw IC. Using the mana from LED, you now can draw the
rest of the pile: LED, LP, BW, LED, allowing you to storm to victory.

## Using 2 CBs in a loop

This section of discussion is one of the strongest arguments advocating the use
of CB, especially in multiples. The more astute of you may have noticed one key
inefficiency of two of the piles discussed already. I will copy them again here
for convenience:

Examples:

```
CB in play+BW+GP:
-> LED, IU, LED, LED, GP                  BBB+0 (3)         9 Storm

CB in play+ToA+GP:
-> LED, IU, LED, LED, GP                  BBB+0 (3)         8 Storm
```

If you notice, both result in wasted mana being left over. With the BW example
you are left with U and with the ToA example you are left with U(B/R)(B/R) left
over. Is there a way we can maximise the use of this mana?  
What if we were to swap the GP in the piles with a CB?

Examples:

```
CB in play+BW+GP:
-> LED, IU, LED, LED, CB                  BBB+0+X (3+X)      9+X Storm

CB in play+ToA+GP:
-> LED, IU, LED, LED, CB                  BBB+0+X (3+X)      10+X Storm
```

Suddenly the two piles look very different notation wise. Both now have a
variable X value in their respective mana costs and storm generated values. We
also see suddenly that the ToA pile, traditionally having a lower storm count
than its BW cousin has suddenly overtake it in terms of storm generated.

This is because we can make use of a Bauble loop. Much like the historic looping
of two SDTs to generate storm we can do the same thing here. With the BW
example:

1. Cast Doomsday build -> [LED, IU, LED, LED, CB]
2. Cast GP, draw (LED)
3. Cast LED, crack LED for UUU
   - Crack CB targeting nothing, draw (IU)
4. Cast IU, draw (LED, LED, CB)
5. Cast CB
6. Cast LED
7. Cast LED
   - Crack LEDs for BBB RRR
   - Crack CB targeting BW, draw (BW)
8. Cast BW (8) targeting ToA
9. Cast ToA for 9 storm.

Simple enough right?

What about if you had some extra mana available before you cast the first GP?

What you can do is instead of targeting BW straight off with the second CB, you
can instead target the first one used to draw the IU. This lets you loop your
two CBs costing only 1 mana for each loop. This means that you can directly
convert excess mana into extra storm on a 1:1 basis.

This also explains why the ToA pile above now has a greater storm count. The
pile still has 2 mana left over after casting and using all of its LEDs so you
can use that to generate two CB loops. As a result the ToA pile gains +2 storm
compared to it's normal default.

You can also use this in conjuction with the exile effect of AoI/TW.  
Let us consider this example:

```
BW, GP in hand, CB in play:
-> BS, LED, AoI, LED, CB                  BBB+U+X (4+X)      13+X Storm
```

For only a single mana post DD we have a very impressive potential stormcount
which can additionally be increased. How do we go about achieving that?  
Let's take a look:

1. Cast Doomsday build -> [BS, LED, AoI, LED, CB]
2. Cast GP, draw (BS)
3. Cast BS, draw (LED, AoI, LED), replace (AoI, BW)
4. Cast LED
5. Cast LED
   - Crack LEDs for BBB RRR
   - Crack CB targeting LED, draw (AoI)
6. Cast AoI, exile (BW, CB, LED)
7. Cast LED
   - Crack LED for RRR
8. Cast CB, BBBRR remains in mana pool
   - Crack CB targeting CB, draw (CB)
9. Cast CB, BBBR remains in mana pool
   - Crack CB targeting CB, draw (CB)
10. Cast CB, BBB remains in mana pool
    - Crack CB targeting LED, draw (LED)
11. Cast LED
    - Crack LED for RRR
12. Cast BW targeting ToA
13. Cast ToA for 13 storm.

The key point here is the fact that both the second CB and the BW can be cast
via LED mana and we can make loops without affecting our exiled BW. This also
means that we don't open up our BW to the risk of being hit by an opposing
Deathrite Shaman or similar as we only care about our artifacts looping from the
graveyard.

As CB enables many low mana cost, high storm piles it is perfect to use it for
pass-the-turn piles. The above examples can be generated for -2 storm each as
pass the turn piles however you likely have extra mana available to increase
your potential X value.  
Let's have one last look at a pass the turn pile using CB looping this time
using IC over IU or [AoI/TW]:

Example:

```
Pass the turn.
CB in play+ToA:
-> LED, IC, LED, LED, CB                  BBB+1+X (4+X)      12+X Storm
```

Cast Doomsday build -> [LED, IC, LED, LED, CB]  
Pass the turn  
Draw (LED) for turn  
1. Cast LED
   - Crack LED for BBB
   - Crack CB targeting LED, draw (IC)
2. Cast IC, draw (LED, LED, CB, LED)
3. Cast LED
4. Cast LED
5. Cast LED
6. Cast CB
   - Crack LEDs for BBB BBB BBB
   - Crack CB targeting CB, draw (CB)
7. Cast CB, BBB BBB BB remains in mana pool
   - Crack CB targeting CB, draw (CB)
8. Cast CB, BBB BBB B remains in mana pool
   - Crack CB targeting CB, draw (CB)
9. Cast CB, BBB BBB remains in mana pool
   - Crack CB targeting CB, draw (CB)
10. Cast CB, BBB BB remains in mana pool
    - Crack CB targeting CB, draw (CB)
11. Cast CB, BBB B remains in mana pool
    - Crack CB targeting ToA, draw (ToA)
12. Cast ToA for 12 storm.

These tricks with CB allow for a number of iterations based on these simple
concepts. They are useable with IU, IC or AoI/TW which means you can have a lot
of flexibility in terms of deckbuilding and card choices.

## Using CB to play around hate

CB has a few niche cases that allow it to mitigate opposing hate cards. Whilst
many of its uses do have a weakness to severe graveyard hate such as Rest in
Peace, it can help against some of the softer hate cards or corner case
scenarios.

Surgical Extraction is very effective against Doomsday. It not only takes out
potential key cards from being used but also forces the player to shuffle their
Library thereby destroying the order they had stacked it. CB can help protect
the pile / deck by acting as a blocker. When Surgical Extraction is cast on
something in your graveyard, you can respond by sending the target card to the
bottom of the deck thus causing the Surgical to 'fizzle' with no valid target.

The main trick with this is timing. You obviously cannot use the CB as part of
the main pile itself so it must sit on the sidelines waiting. You also cannot
use it at the wrong time as that could lead to (as an example) instances of
drawing both an LED and the IU you intended to cast with the LED mana. Most of
the time a player will attempt to Surgical in response to you trying to draw
into your Doomsday pile. If you can plan around this you should be able to null
and void their Surgical.

Example:

```
CB in play+GP:
-> AoI, LED, LED, GP, BW                  BBB+2R (6)         8 Storm
```

If they cast Surgical in response to GP, you can use CB to send the target back
into the deck. If they cast it in response to AoI you can do the same trick.
Once AoI has resolved, it does not matter if they cast Surgical as we have one
card left in our Library and no copies of it to extract in the Graveyard.

This selective blocking of graveyard targets is also great pre-combo against
opposing Deathrite Shamans. If they target your land to add mana, you may
respond with a CB activation targeting the same land to gain a draw and deny
them mana. This is a great way of preventing things like turn 2 Leovolds or
similar.

A simple use of CB is simply as a non-U cantrip. Often players will bring in
Pyroblasts/Red Elemental Blasts to disrupt the combo targeting the IU or other
cantrips used to draw into the piles. CB can act as a simple 1 mana "Draw a
card" spell that nullifies the R-blasts completely. Especially when paired with
AoI or IC.

Example:

```
CB in play:
-> IC, LED, LED, BW, CB                  BBB+1+X (4+X)      7+X Storm
```

The last use I wish to present is in regards to Shelldock Isle + Emrakul Piles.
You can use CB to protect the pile against a couple of Legacy staples that are
also incidentally hate cards against such piles.

Example:

```
Pass the turn:
-> SI, Emrakul, DR, DD, LM                  BBB+U (4)
```

This is a very basic SI pile. The idea is it contains SI to play to then
Hideaway Emrakul, the Aeons Torn with a second Doomsday or Laboratory Maniac as
Insurance at Emrakul or SI being dealt with. If all goes well you should be able
to get two turns worth of 15/15, Annihilator 6 attacks in.

There are a few cards that can hamper this plan. Jace, the Mind Sculptor and
Goblin Guide to name a couple. You can play around these cards by making a
subtle alteration to the pile.

Example:

```
Pass the turn:
-> CB, SI, DR, DD, Emrakul                  BBB+U (4)
```

Adding CB means you can play around the cards all mentioned above. If they Jace
'fateseal' you then it does not matter if they choose to keep the CB there or to
send it to the bottom. Goblin Guide no longer draws you a card and thus causes
you to lose a turn worth of attacking. When you draw CB you simply play it and
use it to draw into SI. You can target the Doomsday that you used to make the
pile with in order to give yourself an additional turn worth of Emrakul attacks.

## Summary

1. CB can be used to save a draw when using LED for mana
2. CB can be used to retrieve cards for multiple use in a pile
3. CB can be used to extend a pile
4. CB can be used to get around some hate cards
5. Be mindful of targeted graveyard hate if exposing your cards to the graveyard
   when using CB

Hopefully this will allow a greater understanding of how to play through more of
the piles that make up the [Pile Document](/appendices/piles/). Remember as with
anything it is better to learn the concepts presented here more so than to try
and rote learn piles and of course, practice makes perfect.
