---
authors: drynne
order: 1
title: Playing the Deck
---

## Preamble

As a deck with two unique gameplans, Entombsday requires some flexibility from its pilot. Knowing the ins-and-outs of both Tin Fins and Doomsday will improve your performance with the deck, as will developing your own heuristics for when to uses which plan.

Because this Wiki already contains excellent resources for how to play Turbo Doomsday, we will primarily focus on the Tin Fins plan and when to *transform* into Doomsday.

## Playing Tin Fins

Fundamentally, Tin Fins is an A + B reanimator combo deck.

### Lion's Eye Diamond in Tin Fins

:card[Lion's Eye Diamond] is a tricky card to use properly due to the rules weirdness surrounding it. It is primarily included in the deck for its use in Doosday piles, but there are a few important interactions to be aware of for the Tin Fins half of the deck.

LED can be used to *bin* a Griselbrand in response to a :card[Shallow Grave]. This unfortunately does not work with Emrakul, as her shuffle trigger will be stacked on top of Shallow Grave and leave you with an empty graveyard when Shallow Grave resolves.

Similar to its use in Storm decks and Doomsday piles, LED can be cracked in response to a Griselbrand activation to make the mana available for the cards you will be drawing. Just make sure you hold priority when activating Griselbrand by holding Control on MTGO or announcing it in paper.

### Infinite Loops

In the event that you can’t find a way to reanimate Emrakul pre-combat, you are able to *loop* your deck to either cast Emrakul or repeatedly cast :card[Collective Brutality] to drain your opponent out 2 life at a time.

To *loop* your deck:

1. Draw 14 to 21 cards with Griselbrand until you can put :card[Children of Korlis] into play (either by casting or reanimating it).
2. Sacrifice Children of Korlis to regain all of the life you’ve lost so far this turn (this effect is **cumulative**, so you can gain functionally infinite life if you *loop* Children).
3. Using the life gain from Children, draw your entire library and begin casting Dark Rituals to generate a large amount of {B} mana.
4. After casting all of your Rituals, discard :card[Emrakul, the Aeons Torn] to shuffle them back in. Make sure you have at least 7 cards between your deck and graveyard, so you don't lose the game from decking.
5. At this point you should be able to cast Emrakul and take an extra turn to attack for lethal.

If for some reason you’re unable to attack (i.e. there is an :card[Ensnaring Bridge] in play), you can continue to *loop* through your deck until your deck + your graveyard add up to a multiple of 7. From there, cast and sacrifice two copies of :card[Lotus Petal] for {W}{B}, cast and sacrifice Children of Korlis, cast Dark Ritual, cast Collective Brutality for its drain mode, then discard Emrakul using either :card[Thoughtseize] or :card[Cabal Therapy] to shuffle those 7 cards back into your library. You can now demonstrate a loop that generates infinite life and infinitely drains your opponent.

Notably, you can’t escalate :card[Collective Brutality] to discard Emrakul, as this will leave Collective Brutality in your graveyard after the shuffle resolves, which, as Acclimation puts it in his Tin Fins primer, “does not do the thing”.

## Mulligans

As a combo deck, Entombsday tends to mulligan well, but requires specific cards to function. It is able to go as low as 4 cards and still combo on turn 1: a {B} source, :card[Dark Ritual], :card[Entomb], and a reanimation spell.

In general, you want to leverage the London Mulligan to find the fastest hand you can in game 1, preferably with protection. You should avoid keeping hands that just durdle and cast cantrips, as that will give your opponent time to stabilize and accumulate resources.

When sideboarded into Doomsday, you want to look for hands that cast Doomsday quickly -- generally before turn 3. This typically means hands that contain either Doomsday itself or Personal Tutor and the mana to cast it. As with the game 1 plan, a protection spell is also helpful. 

### Sample Hands: Keep or Mull?

:::row{variant=HAND}
 - Marsh Flats
 - Lotus Petal
 - LED
 - Dark Ritual
 - Entomb
 - Goryo's Vengeance
 - Force of Will
:::

:::accordion[Click to reveal]
**Keep!** - This hand is better on the draw than the play, since you have a chance to draw a blue card for Force to protect your combo, but we're not here to send back a turn 1 combo.
:::

:::row{variant=HAND}
 - Underground Sea
 - Lotus Petal
 - Polluted Delta
 - Dark Ritual
 - Thoughtseize
 - Preordain
 - Force of Will
:::

:::accordion[Click to reveal]
**Mulligan** - While this hand definitely plays Magic and is fairly disruptive, it does nothing to enable your combo. You'll need to find both Entomb/Griselbrand and Shallow Grave/Goryo's Vengeance.
:::

:::row{variant=HAND}
 - Underground Sea
 - Flooded Strand
 - Marsh Flats
 - Entomb
 - BS
 - Force of Will
 - Lim-Dul's Vault
:::

:::accordion[Click to reveal]
**Keep** - Despite being a fairly slow hand, you have Entomb, Protection, and multiple ways to dig for a reanimation spell. I would lead on the fetch lands and cast Lim-Dul's vault in my opponent's End Step.
:::

:::row{variant=HAND}
 - Polluted Delta
 - Entomb
 - Cabal Therapy
 - Thoughtseize
 - Goryo's Vengeance
 - Daze
 - Force of Will
:::

:::accordion[Click to reveal]
**Keep** - Even though this hand only has one land, it has both combo pieces and multiple pieces of protection, giving you time to find your second land or a Dark Ritual.
:::

:::row{variant=HAND}
 - Flooded Strand
 - Lotus Petal
 - Polluted Delta
 - Thoughtseize
 - Goryo's Vengeance
 - Ponder
 - Consider
:::

:::accordion[Click to reveal]
**Risky Keep** - This hand is a keep, but it's not a great one. You have six outs between your 4 Entombs and 2 Griselbrands, but there is a chance you cast your cantrips and whiff.
:::

:::row{variant=HAND}
 - Underground Sea
 - Polluted Delta
 - Cabal Therapy
 - Griselbrand
 - Ponder
 - Brainstorm
 - Brainstorm
:::

:::accordion[Click to reveal]
**Risky Keep** - Another risky one. This hand bypasses the need for Entomb by using Cabal Therapy to *bin* your Griselbrand, but needs to cantrip toward one of your six reanimation spells.
:::

## Sideboarding

Despite being a deck with a transformational sideboard plan, Entombsday does not need to *transform* in every post-board game. This guide will not tell you which plan to use in a given matchup, as the legacy meta is constantly changing and this guide would be outdated as soon as it is posted. It will outline some general guidelines of which plan is better against which hate pieces. Strong knowledge of the meta and each archetype's gameplan and common sideboarding will serve you well here.

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

Depending on the situation, you are also able to bring in one or both of :card[Flusterstorm] and :card[Echoing Truth], typically cutting either one to two :card[Preordain] or one :card[Daze]. 

As a general rule, you want to side into Doomsday when you expect permanent hate pieces such as :card[Leyline of the Void], :card[Dauthi Voidwalker], or :card[Grafdigger's Cage]. When expecting stack based hate, such as :card[Surgical Extraction] or :card[Endurance], it can be better to stay on the Tin Fins plan, as those are more easily beatable using the instant speed nature of the Tin Fins combo. 

It can also be correct to *transform* back and forth or stay Tin Fins in game two and only *transform* for game 3.

When playing in paper, it's correct to shuffle all 15 sideboard cards in between each game, so the opponent doesn't know which gameplan you are on.

### Partial Sideboarding

In some matchups&mdash;such as Dredge, Hogaak, and Turbo Depths&mdash;where you expect a fast clock, discard, but no countermagic you can use a hybrid sideboard plan to create a "two-card monte"-style deck. The idea here is to have a higher density of "action" spells, allowing for a higher number of turn 1 combos.

The sideboard plan for this is generally:

|**In**|**Out**|
|------|-------|
|4x :card[Doomsday]|4x :card[Force of Will]|
|1x :card[Edge of Autumn]|2x :card[Daze]|
|1x :card[Shelldock Isle]|2x :card[Preordain]|
|2x :card[Street Wraith]|1x :card[Griselbrand]|
|1x :card[Thassa's Oracle]||

## Common Doomsday Piles

Because the sideboard swap is so clean, Entombsday has very few deck-specific piles that aren't also available to Turbo Doomsday lists. I would again recommend reading through the resources available in the [Turbo Doomsday section][meandeck:basics] of the Wiki. As a quick reference, some common piles to know are:

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