---
authors: drynne
order: 0
title: The Basics
---

## Table of Contents

## Preamble

Entombsday is a Tin Fins/Doomsday hybrid combo deck. 

:::row{variant=CENTERED}
- Entomb
- Griselbrand
- Doomsday
:::

Tin Fins is a Reanimator variant that primarily aims to reanimate :card[Griselbrand] with haste using either :card[Shallow Grave] or :card[Goryo’s Vengeance], then draw enough cards to reanimate :card[Emrakul, the Aeons Torn] and attack for 22 damage. To enable this, the deck runs :card[Children of Korlis] to regain the life paid to :card[Griselbrand] and enable us to frequently draw our entire deck.

:card[Doomsday] aims to win the game by casting the namesake card and building a pile of 5 cards to win the game, typically using :card[Thassa’s Oracle].

The Tin Fins gameplan is incredibly strong in game 1, but is vulnerable to many common sideboard hate cards (:card[Leyline of the Void], :card[Endurance], :card[Surgical Extraction], and more). To work around this, the deck is able to transform into Doomsday in sideboarded games, functionally invalidating the opponents hate cards. Using :card[Doomsday] as your transformational plan works exceptionally well, as the core combo package of both plans is ~13 cards, while the shell is virtually identical for both decks.

## History

Tin Fins players are no strangers to transformational sideboards and hybrid gameplans. The deck has frequently run sideboard cards such as :card[Monastery Mentor] to dodge the aforementioned graveyard hate pieces. In fact, :card[Doomsday] had been discussed as a sideboard option for Tin Fins for years prior to the printing of Thassa’s Oracle. The current Entombsday build was popularized by Walked toward the end of 2020 and has continued to evolve from there. 

## Deck Construction

::decklist{path=2023/03/entombsday.drynne}
::decklist{path=2023/03/entombsday.Nitro_Rick}

As previously stated, the shell of both Tin Fins and Doomsday are remarkably similar and the combo packages are roughly the same size. Because of this overlap, there are very few concessions made in deckbuilding.

### Notable Inclusions

:::row{variant=CENTERED}
- Emrakul, the Aeons Torn
- Lim-Dul's Vault
- Scrubland
:::

:card[Emrakul, the Aeons Torn] - While she has generally fallen out of favor in :card[Doomsday] lists, Emrakul is integral to the Tin Fins strategy as she allows looping the deck and swinging for lethal.

:card[Cabal Therapy] - This enables several interactions that are important to the Tin Fins half of the deck: it is a way to discard yourself without needing to pay the 2 life for Thoughtseize and it allows you to sacrifice your Griselbrand to put it back into your graveyard for next turn if you whiff on your combo turn.

:card[Lim-Dul’s Vault] - While slow, LDV allows you to find Entomb, a reanimation spell, and Doomsday. Unless :card[Mystical Tutor] gets unbanned (Ha!), it’s our best option for a tutor that finds both combos.

:card[Consider] - Consider is a card that has been discussed at length in the context of :card[Doomsday] and is included for those reasons. It has the additional upside of being able to *bin* Griselbrand or Emrakul directly from your library (generally after setting it up with a Brainstorm).

:card[Shelldock Isle] - This is another card that has seen less inclusion in Doomsday lists, but we include it since we already have an Emrakul in the deck. This enables some fairly simple piles that play around :card[Endurance] and :card[Painter’s Servant] + :card[Grindstone].

:card[Scrubland] - While most Doomsday lists have no need for a {W} source, Entombsday wants to be able to cast :card[Children of Korlis] off of lands in the event you don’t draw a :card[Lotus Petal] while comboing. 

### Flex Slots

:card[Collective Brutality] - CoBru is an uncountable way to *bin* Griselbrand or Emrakul. Simply cast it with at least one Escalate mode and you are able to discard a card as a cost. CoBru also allows you to win without the combat step by draining your opponent for 2 life every time you *loop* your library. Despite these upsides, the card is clunky and can be considered a flex slot.

:card[Personal Tutor] - While it is a staple of Turbo Doomsday lists, we generally run it as a 2-of or not at all. It makes the Doomsday plan more consistent at the cost of our already limited sideboard slots.

:card[Thassa’s Oracle] - While a single copy is required for the :card[Doomsday] plan, a second is optional and can be replaced with a draw spell such as :card[Predict] or :card[Ideas Unbound].

### Other Options

:card[Chrome Mox] - Lotus Petal number 5.

:card[Predict] and :card[Ideas Unbound] - A way to quickly draw through your *pile*. Opinions on these cards are fairly split amongst Doomsday players.

:card[Chain of Vapor] - Cheaper to cast than :card[Echoing Truth], but can’t bounce :card[Chalice of the Void] on 1.

## Playing the Deck

### Mulligans

:::row{variant=CENTERED}
- Entomb
- Goryo's Vengeance
- Dark Ritual
- Underground Sea
- Daze
:::

In general, you want to leverage the London Mulligan to find the fastest hand you can in game 1, preferably with protection. Your best hands will contain :card[Entomb], a reanimation spell, :card[Dark Ritual], a {B} source, and protection. At minimum, you’re looking for a hand that contains Entomb or a discard spell + Griselbrand and a way to find a reanimation spell. I would generally avoid keeping hands that just durdle and cast cantrips, as that will give your opponent time to stabilize and accumulate resources.

When sideboarded into Doomsday, you want to look for hands that cast Doomsday quickly -- generally before turn 3. This typically means hands that contain either Doomsday itself or Personal Tutor and the mana to cast it. As with the game 1 plan, a protection spell is also helpful. 

### Playing Tin Fins

In the event that you can’t find a way to reanimate Emrakul pre-combat, you are able to *loop* your deck to either cast Emrakul or repeatedly cast :card[Collective Brutality] to drain your opponent out 2 life at a time.

To *loop* your deck:

1. Draw 14 to 21 cards with Griselbrand until you can put :card[Children of Korlis] into play (either by casting or reanimating it).
2. Sacrifice Children of Korlis to regain all of the life you’ve lost so far this turn (this effect is **cumulative**, so you can gain functionally infinite life if you *loop* Children).
3. Using the life gain from Children, draw your entire library and begin casting Dark Rituals to generate a large amount of {B} mana.
4. After casting all of your Rituals, discard :card[Emrakul, the Aeons Torn] to shuffle them back in. Make sure you have at least 7 cards between your deck and graveyard, so you don't lose the game from decking.
5. At this point you should be able to cast Emrakul and take an extra turn to attack for lethal.

If for some reason you’re unable to attack (i.e. there is an :card[Ensnaring Bridge) in play], you can continue to *loop* through your deck until your deck + your graveyard add up to a multiple of 7. From there, cast and sacrifice two copies of :card[Lotus Petal] for {W}{B}, cast and sacrifice Children of Korlis, cast Dark Ritual, cast Collective Brutality for its drain mode, then discard Emrakul using either :card[Thoughtseize] or :card[Cabal Therapy] to shuffle those 7 cards back into your library. You can now demonstrate a loop that generates infinite life and infinitely drains your opponent.

Notably, you can’t escalate :card[Collective Brutality] to discard Emrakul, as this will leave Collective Brutality in your graveyard after the shuffle resolves, which, as Acclimation puts it in his Tin Fins primer, “does not do the thing”.

### Sideboarding

When *transforming*, the general sideboard plan is:

|**In**|**Out**|
|------|-------|
|1x :card[Cavern of Souls]|1x :card[Children of Korlis]|
|4x :card[Doomsday]|4x :card[Entomb]|
|1x :card[Edge of Autumn]|2x :card[Goryo's Vengeance]|
|2x :card[Personal Tutor]|2x :card[Griselbrand]|
|1x :card[Shelldock Isle]|4x :card[Shallow Grave]|
|2x :card[Street Wraith]||
|2x :card[Thassa's Oracle]||

Depending on the matchup, you are also able to bring in one or both of :card[Flusterstorm] and :card[Echoing Truth], typically cutting either one to two :card[Preordain] or one :card[Daze]. It can also be correct to keep Children of Korlis in the deck when on the Doomsday plan, as it will allow you to regain the life lost from casting Doomsday.

Sometimes the Tin Fins plan is better than the Doomsday plan in game 2 or 3. As such, we do not always *transform*. As a general rule, you always want to side into Doomsday when you expect permanent hate such as :card[Leyline of the Void], :card[Dauthi Voidwalker], or :card[Grafdigger's Cage]. When expecting stack based hate, such as :card[Surgical Extraction] or :card[Endurance], it can be better to stay on the Tin Fins plan, as those are more easily beatable using the instant speed nature of the Tin Fins combo. 

It can also be correct to *transform* back and forth or stay Tin Fins in game two and only *transform* for game 3.

When playing in paper, it's usually correct to shuffle all 15 sideboard cards in between each game, so the opponent doesn't know which gameplan you are on.

### Common Piles in Entombsday

Because the sideboard swap is so clean, Entombsday has very few deck-specific piles that aren't also available to Turbo Doomsday lists. I would recommend reading through the resources available in the [Doomsday section][meandeck:basics] of the Wiki. As a quick reference, some common piles to know are:

>Pass the Turn OR Cantrip + Land Drop  

:::row{variant=PILE}
- SI
- Em
- TO
- TO
- CoS
:::

This is a variation on the Shelldock + Emrakul Pile that provides three win attempts over multiple turns and plays around things such as :card[Endurance]. Things to note with this pile are:

1. It can be sped up by a turn if you have access to a cantrip and a land drop this turn
2. You don't always need to select Emrakul for the Hideaway trigger. When playing against Painter, it is sometimes correct to leave Emrakul in your deck and hide Thassa's Oracle under the Shelldock Isle, allowing you to cast Oracle before your Draw Step after being milled out.

>Cantrip + {U} + X

:::row{variant=PILE}
- BS
- LED
- Con
- SW
- TO
:::

This is a common *perfect pile* when you have 2 total cards in hand. If you have Brainstorm in hand already and are able to cast it, the pile can be changed to:

>Brainstorm + {U} + X

:::row{variant=PILE}
- LED
- Con
- SW
- SW
- TO
:::

[meandeck:basics]: /meandeck/basics

## Additional Resources

This introduction to Entombsday was made possible by [Walked's original Entombsday primer][primer:walked] and [Acclimation's Tin Fins primer][primer:acclimation].

While outdated, the [Tin Fins primer on MTGTheSource][primer:thesource] is still a great resource for the history of the deck, the general play patterns, and quality Sealab memes.

Current discussion of Tin Fins and its variants happens in the [Sealab Discord server][discord:sealab].

And, most importantly, make sure to join the discussion of Entombsday and Turbo Doomsday in the [Doomsday Discord server][discord:doomsday]

[primer:walked]: https://docs.google.com/document/d/1fJ7TimhdHG-2dwfwkie6jgDcZSl1eFD73QxBd_KQ86c

[primer:acclimation]: https://docs.google.com/document/d/1OVDfdg3ytFoK4jvBVchSDP_upLL8yS4BZSDL32vIkDQ

[primer:thesource]: https://www.mtgthesource.com/forums/showthread.php?24104-Deck-TinFins-3-Return-of-the-Onion-Burst

[discord:sealab]: https://discord.gg/m6z2eqp

[discord:doomsday]: https://discord.gg/vajvFXt
