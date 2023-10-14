---
authors: d8dk32, 7TeenWriters
banner: Spoils of the Vault
kind: ARTICLE
tags: [LEGACY, DDFT]
title: "Spoiling for a Fight: In Defense of Legacy's Most Maligned Tutor"
---

One-mana tutors, such as :card[Demonic Consultation] and :card[Mystical Tutor],
have a history of getting banned in Legacy. Even in Vintage, cards like this get
restricted. The ones that remain legal tend to find a narrow subset of cards and
put them on the top of your deck. But what if we told you that there was a
Legacy-legal, one-mana tutor effect that can put any card right into your hand?
And it's even an instant! You already know, baby! It's :card[Spoils of the
Vault]! How can this card possibly still be legal?

:::row{variant=CENTERED}
Demonic Consultation
Mystical Tutor
Imperial Seal
Booster Tutor
Vampiric Tutor
Goblin Tutor
:::

Assuming you made it this far into the article and are comprehending the meaning
of the funny symbols on your computer screen, then you can read. And if you can
read, it's pretty easy to figure out the downside of Spoils of the Vault. It
kills you. Sometimes. But not even most of the time. But sometimes. Predictably,
most people don't want to play a card that occasionally leads to instant
uncontrollable death, with a side effect of revealing a big chunk of your
decklist at the same time. But despite all this, we have a bold claim to make:

Spoils of the Vault is the most under-utilized tutor effect currently in Legacy,
and easily among the most powerful.

To back up this claim, we'll discuss the use of Spoils as a simple tutor, the
mathematics and probabilities surrounding its use, and the types of decks that
can best make use of its power. And since this is the _Doomsday Wiki_, we'll
also talk about its applicability to Legacy Doomsday decks, where it has utility
beyond being a simple tutor. Let's get to it!

## Table of Contents

## Spoils as a Tutor

### Part 1: Some Maths

It's impossible to discuss using Spoils of the Vault as a tutor without
disussing the risk of death, so let's get that out of the way first. How likely
are you to die when you cast Spoils? You can play with the widget below to test
some scenarios. It simulates casting Spoils 10000 times with the parameters you
define, and computes average life loss as well as death probability figures.

::insert spoils calculator widget here::

In the base case, if you have 20 life, 53 cards left in your library, and you
name a 4-of, you have about 14% chance to lose the game, and you'll lose on
average around 10 life. If you name a 3-of, you have roughly a 24% chance to die
and will lose around 13 life. If you plan to play with Spoils of the vault, it's
useful to be able to approximmate these values on the fly, so here are a couple
heuristics for that purpose:

> To approximate average life loss, divide your deck size by 1 plus the number
> of remaining copies of the named card.
>
> To approximate percentage to die, multiply 40 by the ratio of average life
> loss to your life total.

The first is much simpler, and if you think about it you can probably intuit why
its true. The second heuristic relies on the first, is not as easy to mentally
math, and only accurate to within 5-10%, but it's the best I've come up with.

Now with that behind us, we can discuss What kinds of decks might want Spoils
and how to construct a deck to maximally leverage it. Clearly we want to build a
deck with as many 4-ofs of important cards as possible. This isn't much of a
deviation from normal Legacy deckbuilding where we generally want as many copies
as possible of our best cards. However it is unlike many tutor-centric decks
like :card[Green Sun's Zenith] piles that are built like a toolbox with lots of
singletons. In a Spoils deck, if you plan to name a card there should be at
least 3 copies of it, and you need a very compelling reason not to include the
fourth.

Additionally, the deck should be built to limit the amount of damage that gets
done to its pilot. Fetchlands, :card[Thoughtseize], or other cards that use life
as a resource should be carefully considered as inclusions because the damage
adds up and reduces the number of cards you can see with Spoils. But most
importantly the deck should be fast so you don't need to worry about your
opponent taking chunks out of your life total.

These contraints mean that we'll mostly be thinking about combo decks,
particularly ones that are looking to assemble a two-card combo. Spoils can
function as additional copies of any combo piece, or any supporting card like
mana acceleration.

### Part 2: A Bit of History

Spoils of the Vault was printed 20 years ago this month, so surely others have
noticed its power? Let's take a look back into the annals of history.

:::row{variant=CENTERED}
Chromatic Sphere
Darkwater Egg
Helm of Awakening
:::

The Source, an MTG forum and once the greatest font of Legacy knowledge
available, has a
[thread](https://www.mtgthesource.com/forums/showthread.php?2640-Deck-Nausea-Tendrils-for-the-win)
that was started in 2005 for a deck dubbed _Nausea_. It was a Storm combo deck,
and used the typical rituals and mana rocks, as well as cards like
:card[Chromatic Sphere] and :card[Darkwater Egg] to draw cards while generating
Storm.

> This card is Legacy's Vampiric Tutor, a very weak one mind you. Seriously
> though this card is the best Black tutor effect in the format. At least I
> can't think of a better one.
>
> &mdash; Evil Roopey

A tutor for one black mana was exactly what the deck was looking for. However
this deck didn't last, because :card[Infernal Tutor] was printed barely a year
later, and steered the fate of Storm combo in an entirely new direction.

:::row{variant=CENTERED}
Dark Depths
Vampire Hexmage
Painter's Servant
Grindstone
:::

In the years between then and now, we can see a handful of results crop up with
Spoils of the Vault. A [Dark Depths/Reanimator hybrid
list](https://www.tcdecks.net/deck.php?id=9950&iddeck=72530) that played it
managed to reach 5th out of 166 in an SCG Open in 2013. There are also some
results from similar lists in MTGO events from that time. Not so long ago in
2019, there are a handful of MTGO league 5-0s from a couple different people
with a Mono-Black Painter/Helm of Obedience deck like [this
one](https://www.mtggoldfish.com/deck/2371231) that plays Spoils as well. These
are the types of decks that Spoils is well suited to. Fast two-card combo decks,
looking to go fast so life totals don't matter. There may be multiple combo
plans in one deck, but they rely on the same enablers like fast mana, and so
Spoils of the Vault acts as a sort of glue to enable both plans concurrently and
hold the deck together.

:::row{variant=CENTERED}
Witherbloom Apprentice
Chain of Smog
:::

More recently, Strixhaven was released and with it came :card[Witherbloom
Apprentice], which together with :card[Chain of Smog] formed a tight, mana
efficient two-card combo. Many people spent time developing lists around the
combo, and noted combo afficionado Jax put a lot of effort into it. At this
point I had been playing Spoils of the Vault myself in Doomsday Storm lists, and
was impressed by it, so I suggested the card to Jax as a tutor option for the
Witherbloom combo list. Sometime thereafter Jax posted this in a conversation in
the Doomsday discord:

![Jax: Spoils is the best tutor for Witherbloom
combo](/media/pictures/2023.spoils.jax.png)

Perhaps it was the aforementioned beer talking but clearly the card made an
impression. I don't know if Jax ever achieved any results with a list like this,
but [kl0gW got a 5-0 some time later](https://www.mtggoldfish.com/deck/4259052).
This deck overall didn't seem to catch on however, and today it is a fringe
combo option, with or (more frequently) without Spoils.

So we can see that Spoils of the Vault probably has the raw power to compete in
Legacy, if only in a certain subset of viable decks. All the decks mentioned are
essentially 2-card combos. Even _Nausea_ is sort of a 2-card combo, because you
need mana and business, and Spoils can become whichever you don't have. There
are plenty of 2-card combo decks in Legacy right now, and even if they don't
play black normally, splashing colors is easy. So then why does it not show up
more often? Well, it's not really a tough question, is it? The card is easily
among the highest risk cards in the format, and Magic, as a game with inherent
variance, is often viewed through the lens of minimizing risk. As such, most
people don't want to take on the risk involved with a card like Spoils of the
Vault. However, there's a case to be made that the card is not as risky as it
appears, and that the reward for casting it is sufficiently high so as to make
it worthwhile in any case. And specifically in the case of Doomsday, Spoils of
the Vault plays a role unlike any other card, serving to further incentivize its
inclusion.

### Part 3: The Philosophy of Spoils, or How Not to Be a Coward

![Bird knows the deep magics](/media/pictures/2023.spoils.bird.png)

The catastrophic way in which Spoils of the Vault sometimes ends games obscures
its power level. The human mind is much better at remembering negative events,
and so it can be difficult to get past a bad loss, much less a string of losses.

![Emidln has given up on Spoils](/media/pictures/2023.spoils.emidln.png)

It's important to recognize that the power level and flexibility provided by a
1-mana, instant-speed tutor will, over a sufficiently large sample size,
increases your winrate by more than the Sudden Instant Death by Spoils will
decrease it.

![Wonderpreaux, regarding Spoils of the
Vault](/media/pictures/2023.spoils.wonderpreaux.png)

Perhaps these testimonials are giving you the wrong idea. I like to think of it
this way: as a fast combo deck, if you need a particular card to win the game,
and that card is more than 20 cards deep into your deck, you weren't going to
win anyway. So if you die to Spoils from a high life total, you have simply
shortcut to the inevitable outcome of the game. You and your opponent will
appreciate the bathroom break. Realistically, in many games where you DON'T die
to Spoils, it will actually have let you dig deeper than you otherwise would be
able to, because Legacy games can easily end before you can dig even 10 cards
deep.

There are situations where this fundamental principle won't exactly be true, for
example when 2 different cards could achieve the same result. Assuming
probabilities are the same for each card, you simply have to choose one by
whatever means you like, and accept that sometimes you will lose the game
because you chose the wrong one.

Before we dive into the applications of Spoils in Doomsday specifically, lets
look at some maths one more time, to hopefully drive home the point that this
card is powerful and worth the risk. Imagine a hypothetical 2-card combo deck,
and of course you want to have a copy of each combo piece in your hand so you
can win. For now we'll ignore how we'd pay for those cards or what turn they
might get cast on.

The chance of drawing 1 of each in a 7 card hand is 14.5%, computed via a
multivariate hypergeometric distribution. If you mulligan as low as 4, your
chance of having 1 of each becomes about 47%. With 4 copies of Spoils of the
Vault in your deck, your chance of having 1 of each combo piece, or one of
either combo piece plus a Spoils, rise to 40%, and if you mulligan as low as 4
your chance of finding your combo pieces increases to nearly 88%!. Even
factoring in that you will only survive Spoils around 85% of the time, you still
end up with a much higher probability of finding those combo pieces.

## Spoils of the Vault in Doomsday

Finally, we have reached the Doomsday portion of the article where we discuss
Doomsday-specific uses for Spoils of the Vault. The card has enough utility that
we believe it should be a much more commonly played tool in the deck. It has
been _proven_ useful in [Mindkiller
Doomsday](/articles/2022/01/16/the-mindkiller-update), and while this style of
list also makes use of it as a simple tutor, it has all the same applications in
Doomsday piles as it would in the more typical Turbo Doomsday lists. It should
be noted however that using Spoils as a tutor in Turbo Doomsday carries extra
risk, in that if you happen to exile all your copies of Thassa's Oracle, you
cannot win. Mindkiller has non-Doomsday paths to victory so this risk is much
less present, but outside of the exceedingly uncommon Street Wraith beats, Turbo
Doomsday will need Thassa's Oracle. For this reason if you intend to play Spoils
you should probably play two copies of Thassa's Oracle (which is more or less
stock at the time of writing anyway).

In Turbo Doomsday, Spoils of the Vault particularly shines as a pile card. After
resolving Doomsday, you know the exact construction and order of your library,
meaning that (barring shuffle effects in response like a Surgical Extraction),
Spoils will find you the card you name for a small, known cost of life. Let's
take a look at some of the possibilities regarding Doomsday piles.

### Spoils Is a Cantrip for {B}

Many Turbo Doomsday lists are running basic Swamp, or Cabal Ritual for
additional {B}{B}{B}-producing effects. Being able to spend this excess black
mana to draw into piles is highly useful. There are, of course, other playable
cards that can do this like Night's Whisper, but as we'll see none of the same
broad utility as Spoils of the Vault. And Night's Whisper always costs you two
life, while Spoils can cost as little as 0.

Furthermore, Spoils can plow through your entire deck for just {B} and some
life. There is no other single card that can get you all the way to the Oracle
at the bottom of your pile for as little mana or life.

### Spoils Can Clear Brainstorms

Brainstorm can be one of the most powerful enablers for Doomsday piles since it
allows you to put up to three fresh cards in your hand, if you have useless
cards you can afford to get rid of. The problem is that after doing this it's
often difficult to create a _perfect pile_, since the cards you put back on top
of your library likely do not draw into other cards. Spoils can cleanly resolve
this issue. For example with Brainstorm and two useless cards in hand, {U}{B}
available, and at least 4 life you might pile:

:::row{variant=PILE}
SotV
LP
LP
X
TO
:::

Drawing Spoils of the Vault, Lotus Petal and Lotus Petal with Brainstorm,
putting back the useless cards you had in hand, you can then cast Spoils naming
Thassa's Oracle and clear the entire pile! Even outside of Doomsday piles, you
can Brainstorm and then name the second card down with Spoils to clear a
potential Brainstorm lock.

### Spoils Adds Flexibility to your Piles

Spoils allows for highly flexible piles, particularly pass-the-turn piles, that
can adjust to how your opponent plays their turn. Since you know the exact
construction of your library, if you have {B} open on your opponents turn Spoils
can in theory be used to grab any card remaining in your deck except the bottom
one (remember you still have to draw for turn, so don't name what's on the
bottom!). For example, imagine you Resolve Doomsday and would like to win on the
next turn, but are worried your opponent has a card in hand that you cannot win
through under any circumstances. If you have Spoils and a spare blue card in
hand you could pile:

:::row{variant=PILE}
X
X
FoW
CoS
TO
:::

If your opponent does not play the problem card on their turn you can cast
Spoils for :card[Cavern of Souls] on their end step and draw Thassa's Oracle on
your turn for the win. If they did turn out to have the problem card you simply
spoils for :card[Force of Will] in response and counter it, passing one extra
time to draw both Cavern and Oracle. Piles like this can get highly complex,
with the two miscellaneous cards on top potentially representing additional
backup plans.

To further illustrate the point, here's another example. Imagine a situation
similar to last time with spoils in hand and {B} open for the opponent's turn,
but in this case you are worried about your opponent having :card[Dress Down]
and would like a pile with an extra Thassa's Oracle so you can try again if the
worst happens. What's more, you are also worried that your opponent might play a
:card[Murktide Regent] and hold up a removal spell, punishing you for your
imperfect pile on your first attempt and not giving you the time to make a
second. In this case you could pile:

:::row{variant=PILE}
X
CoS
TO
PoN
TO
:::

If your opponent does not play the Murktide Regent you can cast spoils on their
endstep for Cavern of Souls, drawing your Oracle with Two cards left in library
and comfortably able to try casting both Oracles if the first gets hit with
Dress Down. Alternatively, if they do play the Murktide Regent, you can name
:card[Pact of Negation] making this into a perfect pile with counterspell
backup.

### Spoils Is a Powerful Tool for Beating Hate

There are a lot of ways Spoils can be used to largely disregard several kinds of
cards that can impact Doomsday piles.

#### Draw-Limiting Effects

:::row{variant=CENTERED}
Spirit of the Labyrinth
Leovold, Emissary of Trest
Narset, Parter of Veils
:::

Since it puts a card into your hand rather than drawing it, and exiles
everything else along the way, Spoils lets you clear any number of cards in your
pile and put one fresh card in your hand through draw limiters such as
:card[Narset, Parter of Veils], :card[Hullbreacher], and :card[Spirit of the
Labyrinth]. This makes it easy to construct basic piles to beat such effects
without too much work.

#### Taxes and Cards That Limit the Number of Spells You Can Cast

:::row{variant=CENTERED}
Deafening Silence
Thorn of Amethyst
Mindbreak Trap
:::

:card[Thalia, Guardian of Thraben], :card[Deafening Silence], and
:card[Mindbreak Trap] are cards that are often on the combo player's mind. While
it should be noted that cyclers can also let you play through these effects,
Spoils of the Vault can do it simply by reducing the number of spells you need
to cast to get through a pile. Fewer spells cast, less additional cost. You can
power through a Deafening Silence or Mindbreak Trap by casting one non-creature
spell, Spoils of the Vault, followed by a creature spell, Thassa's Oracle. With
this utility available, you could potentially consider playing fewer cyclers,
opening a couple slots in the maindeck. You can conceivably even beat Deafening
Silence plus Spirit of the Labyrinth, which cyclers are poorly suited for.

#### Endurance Effects

:::row{variant=CENTERED}
Endurance | MH2
Wheel of Sun and Moon
Memory's Journey
:::

If you cast Spoils naming Thassa's Oracle when it is on the bottom of your
library, and have put nothing else to grave after casting Doomsday other than
Spoils, there will only be Doomsday and Spoils in your graveyard when you cast
Thassa's Oracle. This means that Spoils piles can play around Endurance, though
it's worth mentioning it's difficult to play around much else at the same time.
This requires just {B}{U}{U} after Doomsday and so is very reasonable to achieve
with 3 lands.

Futhermore, you can use Spoils to clear out cards that are put back into the
deck by Endurance, before your Oracle trigger resolves. See the following pile:

:::row{variant=PILE}
IU
SotV
LP
EoA
TO
:::

Here you would cast IU, draw 3, cycle into the Oracle and cast it. When your
opponent responds with Endurance, you can allow the trigger to resolve and then
cast Spoils namimg something that is not in your deck to get back to 0 cards in
library. When making this kind of play, it's important to name the right card to
make sure your opponent knows just how much smarter than them you are. Recent
printings have given us excellent choices like :card[You Are Already Dead] and
:card[The Most Dangerous Gamer].

#### Mill Effects

:::row{variant=CENTERED}
Grindstone
Thought Scour
Hedron Crab
:::

Grindstone is the most commonly played such effect, but you may occasionally run
into something like :card[Thought Scour]. Playing around these effects, while
ordinarily not impossible, can be very tricky, since a well-timed mill can make
your Brainstorm deck you instead of draw useful cards. However, Spoils lets you
build piles that easily beat such effects. Let's contrive a realistic example to
demonstrate. Imagine you're playing against Painter, and you can cast Doomsday
but will need to pass the turn. Your opponent has an :card[Urza's Saga] that is
going to pop on their turn, and you wish to avoid losing to the Grindstone you
expect them to get. The following pile is immune to Grindstone:

:::row{variant=PILE}
SotV
Consider
EoA
SW
TO
:::

If they activate Grindstone any time before your draw step, you'll mill Spoils
and Consider, and be able to simply cycle into Oracle. If they let you draw
Spoils for turn, then responding to Spoils by activating Grindstone will simply
cause Spoils to cost you less life.

## Are You Convinced?

:::row{variant=CENTERED}
Abandon Hope
Savage Beating
Imminent Doom
You Are Already Dead
The Most Dangerous Gamer
:::

I don't blame you if you arent't. Cast your first Spoils that ends a game you
otherwise had wrapped up, and you'll curse this article, its authors and their
descendants. Losing games because you made a deckbuilding decision that directly
led to the loss hurts, no matter how many more games you win because of that
choice. You just need to desensitize yourself to it, which means you need to
cast more Spoils.

Soon you'll be ONE OF US.
