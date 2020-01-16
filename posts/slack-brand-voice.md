---
title: "Reverse Engineering Slacks Brand Voice"
description: "work ya'll"
date: 2019-01-06
---

<nav class="nav__container--layout nav__container--style">

*   [Home](https://jasontcrabtree.com/#)
*   [Case Studies](https://jasontcrabtree.com/#portfolio)
*   [CV](https://jasontcrabtree.com/resume.pdf)
*   [Blog](https://blog.jasontcrabtree.com/)
*   [Contact](https://jasontcrabtree.com/#contact)

<main class="main-grid__grid-structure ">

<header class="cs-title-group__main-title--layout">

# Reverse Engineering a World Famous Brand Voice: Let's Sound like Slack

A Case Study: Problem Solving Under the Hood

Published 28 May 2019 ∙ [Jason Crabtree](https://twitter.com/jasontcrabtree)

</header>

<aside class="cs-image__5-pictures-01">

<figure class="cs-image__caption--layout tag-span
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin
            ">![PLACEHOLDER](assets/svg/placeholder.svg)

<figcaption>***Not a real word cloud, but you get the idea!</figcaption>

</figure>

</aside>

<section class="cs-article__table-of-contents-container
            cs-article__layout--sm-media-query cs-article__layout--64px-spacer">

<section class="cs-article__table-of-contents-content
                cs-article__layout--sm-media-query">

## Table of Contents:

1.  [Introduction](#introduction)
2.  [Product Elevator Pitch](#elevator-pitch)
3.  [Problem & Opportunity](#problem-opportunity)
4.  [Design Execution](#design-execution)
5.  [Final Outcomes](#final-outcomes)

</section>

</section>

<article class="
        cs-article-layout
        cs-article__text--type-constraints
        cs-article__layout--sm-media-query
        ">

## Introduction:

This Case Study describes how I solved a problem I was personally experiencing, and the steps along that path. In doing so, I’ve focused on my problem-solving process, rather than presenting a final, polished interface. That focus reflects both the context and how I think about design. I firmly believe that a lot of problems can be solved via spreadsheets and text documents — and that not everything needs pixel-perfect presentations (although some things do need that!).

If you’d like to hear more about this or anything else say hello on [twitter](https://twitter.com/jasontcrabtree) or [via email](mailto:jasontcrabtree@gmail.com). And if you’re hiring Product Designers, I’m actively looking for opportunities in Dublin, London or remote!

### Setting the Scene:

A few months ago, I applied for a job at Slack. At the time I was deciding between two worlds — customer operations, the field I’ve spent most of my career working in, and design, my future career. As you might be able to guess, I didn't get the job. However, now that I’ve committed full-time to looking for design jobs, this seems like a great time to talk about one of the ways I prepared for the Slack interview.

**Spoilers:** I designed a small but practical solution to a problem I had during the interview with Slack. That should have been a hint to my design ambitions!

One of Slack’s strengths is its brand voice, writing and personality. Their voice is something they have and continue to invest a lot of time, effort and care into — and it's paying off. People love it!

*   [Brands that are totally killing it with voice, tone & style (& how you can, too)](https://uxdesign.cc/brands-that-are-totally-killing-it-with-voice-tone-style-and-how-you-can-too-47792613b267)
*   [Day in the Life: How Slack’s Anna Pickard makes software sound human](https://digiday.com/uk/day-life-slacks-anna-pickard-makes-software-sound-human/)

During the interview process I did two writing exercises, one before an on-site interview and one during the on-site interview. As I was preparing for these exercises, and knowing that writing is such an important focus for the Slack team, I wanted to everything I could to prepare. That lead to researching existing resources describing Slack’s voice and brainstorming ways I could take things to the next level. While doing that research I had the idea of reverse-engineering their voice using old tweets (they've tweeted 230,000 times at [@SlackHQ](https://twitter.com/slackhq)), leading to this case study.

## Product Elevator Pitch

### A Broad Description:

I designed a basic method of using text analysis on historic tweets to see common and repeated words and understand overall language choices.

### The Specific Circumstances:

In a few sentences, I downloaded the contents of 3,200 [@SlackHQ](https://twitter.com/slackhq) tweets, then used an open-source JavaScript CodePen to count how many times different words were repeated. Based on that output, I was able to look at common words and language choices. This output helped me understand the language used by the Slack team, thereby using it for my writing assignment.

<div class="list-paragraph">

### My Role and Focuses:

*   **Research:** The importance of tone of voice
*   **Research:** Finding ways to download tweets & count word usage
*   **Code:** Run the code scripts needed
*   **Analysis:** Using Excel to analyse the results
*   **Presentation:** Displaying the top words in a format useful for the initial goal

</div>

<figure class="
                cs-image__5-pictures-01
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![Piles and piles of open books, with thousands of words facing upwards](https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)

<figcaption class="tag-span ">Photo by Patrick Tomasso on [Unsplash](https://unsplash.com/photos/Oaqk7qqNh_c?)</figcaption>

</figure>

## Problem & Opportunity

### Defining a How Might We Statement:

**How Might I** effectively learn Slack’s tone of voice **so that I can** successfully finish the writing assignment part of their interview process.

<figure class="cs-image__5-pictures-01
            cs-image__caption--layout
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![Defining the HMW Statement and the Guiding Goal](https://res.cloudinary.com/jasontcrabtree/image/upload/v1559160064/Slack-Case-Study/Slack-Brand-Voice-How-Might-We.png)

<figcaption>Defining the How Might We Statement as a Guiding Goal</figcaption>

</figure>

### What’s the goal?

Develop a practical understanding of the words and language used by the Slack team. Then, apply what I've learn about Slack's brand voice while completing the assigned writing exercise.

<div class="list-paragraph">

### What are the constraints?

*   Due to my limited experience with Python and JavaScript I was constrained to using scripts published by other people.
*   Limited data analysis knowledge, reducing me to straightforward word count analysis, rather than more sophisticated analysis.
*   The Twitter API limits historical tweet downloads to 3,200 tweets.
*   Existing resources on the Slack voice focus on high-level creative direction and how they want the customer to feel, rather than practical words and language decisions.
*   As someone external to Slack, I wasn’t able to ask for help from people within Slack who know and use the Slack voice daily.

</div>

### Research & Preparation:

Faced with this problem statement, I started by looking for existing resources, blog posts, talks and presentations. This lead to discovering a number of great resources. As I kept researching the subject I started to see the depth of this subject, encouraging me to dive in further. A few of the resources I found:

<div class="list-paragraph">

### Research on existing resources for Slack’s tone of voice:

*   [How do you reflect the diversity at Slack with voice?](https://www.quora.com/How-do-you-reflect-the-diversity-at-Slack-with-voice)
*   [The story of #beeftweets](https://slackhq.com/the-story-of-beeftweets)
*   [Words are hard](https://slackhq.com/words-are-hard)
*   [One voice, many hands](https://slackhq.com/one-voice-many-hands)
*   [Presentable Podcast #15: The Voice of Slack](https://www.relay.fm/presentable/15)

</div>

While these provided a foundational starting point, I still wasn’t sure of a few things. For example, how does Slack use the word ‘sorry’? Is ‘sorry’ reserved for severe mistakes, or commonly used in polite conversation? (Answer: It's used in about 1/3rd of the tweets I downloaded)

I then committed to the idea of downloading and analysing Slack’s tweets to see the exact words they used. At that point I had a second research path; figure out how to execute my plan.

While I had a hunch my idea was possible, my own coding experience with HTML & CSS didn't exactly supporting downloading tweets from the Twitter API or running complex data analysis. Because of these constraints I focused on finding open-source and easy to use solutions for the step by step functions I needed.

<div class="list-paragraph">

### Research to Find the Required Code Scripts:

*   An open-source Python script to download Tweets via the Twitter API (via [GitHub: Tweepy](https://github.com/tweepy/tweepy))
*   A way to count how many times, different words were used and repeated. That led to an open source JavaScript CodePen (original: [CodePen: Lalwanivikas/Word-Counter](https://codepen.io/lalwanivikas/))
*   Tweaks to the initial CodePen for my purposes ([CodePen: Jasontcrabtree/Word-Counter](https://codepen.io/jasontcrabtree/pen/bZdqXm))
*   Googling basic Excel filtering to decipher the results.

</div>

The outcome was a set of tools ready to be creatively glued together to achieve my goals.

## Design Execution:

### Designing the Solution:

Because Slack has such a strong presence on [Twitter (233,000+ tweets)](https://twitter.com/slackhq), I immediately knew I wanted to use tweets as my data source. At that point, it was about figuring out the logistics of downloading those tweets. From my research, I also knew that the Slack team used a slightly different brand voice for tweets compared to blog posts or press releases. Based on the writing assignment I was given — the Twitter voice fit my particular use-case.

I experimented with a few resources and found that a lot of existing tools either **A)** Were outside of my budget, **B)** Didn’t export a CSV/Excel readable data file, or **C)** I couldn’t get to work at all.

Once I found Tweepy ( [http://www.tweepy.org/](http://www.tweepy.org/) ), the actual design execution became simple. Tweepy is a python script that you can run from your terminal after signing up for a Twitter Developer API key. Using that script, you choose which profile to download tweets from, then execute the script like so. Here’s me downloading tweets from my account!

I’ve never written or used Python before — so figuring this out was a real highlight, showing how much you can achieve with the right google searches.

<figure class="cs-image__5-pictures-01
            cs-image__caption--layout
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![A terminal window showing 3053 tweets downloaded](https://res.cloudinary.com/jasontcrabtree/image/upload/v1559160579/Slack-Case-Study/downloading-tweets-using-terminal.png)

<figcaption>Downloading tweets from my personal twitter account.</figcaption>

</figure>

The [Codepen Word Counter](https://codepen.io/lalwanivikas/) I used required some minor tweaks. These tweaks included altering the ‘stopWords’ section and increasing the number of top words shown from 4 to 500\. Those changes were all trial and error — fair warning!

<figure class="cs-image__5-pictures-01
            cs-image__caption--layout
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![](https://res.cloudinary.com/jasontcrabtree/image/upload/v1559160630/Slack-Case-Study/top-words-used-by-slack.png)

<figcaption>The top words used by Slack. A lot of foundational words and 's and 're.</figcaption>

</figure>

### Breaking Down the Process:

This process breakdown shows that this was very much a behind-the-scenes, hacking-things-together way to achieve the desired goal. I think the method I used to solve my problem has a lot of merit as a product (maybe one day), and equally this process would be one of the first things I’d work on improving!

### Data Download & Analysis Steps:

1.  Use Tweepy to download tweets from the [@SlackHQ](https://twitter.com/slackhq) Twitter handle.
2.  Load the exported CSV file and copy the tweets.
3.  Paste the tweets into the Word Counter Codepen.
4.  Export the words & word usage counts from the CodePen*.
5.  Paste the top words back into Excel to filter and review.
6.  Note down keywords, trends and phrases for final use.

*The CodePen disabled copying of the Top Words, so I used Chrome DevTools to copy the code element into a Code Text Editor. Then deleted the HTML tags to copy the final results into Excel. If you need help with this contact me on Twitter!

<figure class="cs-image__5-pictures-01
            cs-image__caption--layout
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![Breaking down the process. Copying and pasting text from one file to the next.](https://res.cloudinary.com/jasontcrabtree/image/upload/v1559161175/Slack-Case-Study/Tweet-Download-Process.png)</figure>

### Summarising the Results:

And finally, Voilà! We have our results.

The results show trends, repeated words and language choices — all wrapped up in a helpful list ranked by word use frequency. These results gave clear direction for my use-case, helping me shape my writing based on the brand voice used by the Slack team.

While the final result (a list of words based on word usage count) is relatively unsophisticated — it gave me what I needed to complete my writing assignment.

I did later find out that the writing assignment was mostly a hygiene test, and as such, I probably spent FAR too much time on it. But that’s a story for another time.

<figure class="cs-image__5-pictures-01
            cs-image__caption--layout
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![A few words repeatedly Slack used between February and March 2019 (This isn’t all of them either!)](https://res.cloudinary.com/jasontcrabtree/image/upload/v1559160630/Slack-Case-Study/columns-of-different-words-used.png)

<figcaption>A few words repeatedly Slack used between February and March 2019 (This isn’t all of them either!)</figcaption>

</figure>

## Final Outcomes

### Improvements & Restrictions:

While this project met my particular needs, I'd be remiss without acknowledging that in general this was a fairly narrow scope — with plenty of room for improvement. Focusing on Twitter as the data source created restrictions and reflected a small subset of the overall brand voice. There is also a lot of potential improvements available in terms of data analysis. The prevalence of S, Re, Ll and other such words is due to words like you're, you'll and it's — not actual words. Issues like these and the general focus on single words rather than phrases and themes are things that could be addressed and fixed using more sophisticated data processing techniques. Overall, I think it's important to acknowledge what could be improved!

### The Future of the Concept:

While this project was great for my particular use-case, and I’ve finished what I wanted to achieve with this concept, considering the idea after the fact I think it has a lot of potential depth as a real product. Writing, communication and a strong brand voice can be a massive differentiator between companies, and anything that helps companies, teams and individuals stand out has a lot of value.

There is a lot of further development possible with this base idea. Here are a few of those ideas. Note: these are all abstract ideas — not something I plan to build anytime soon!

<div class="list-paragraph">

### What would take this to the next level?

*   Wrap the core functionality inside a web app within a consolidated UI so that you enter the Twitter handle and immediately download results.
*   Add more sophisticated data analysis options.
*   Add support for counting emojis! 🎉😊
*   Explore additional data sources for adding text data. It doesn't have to be constrained to Twitter!

</div>

<figure class="cs-image__5-pictures-01
            cs-image__caption--layout
            tag-span cs-article__layout--64px-spacer
            full-bleed--less-margin">![A simple mock-up of a web-app containing the same text analysis functionality](https://res.cloudinary.com/jasontcrabtree/image/upload/v1559158952/Slack-Case-Study/Brand-Voice-Mock-Up.jpg)

<figcaption>A simple mock-up of a web-app containing the same text analysis functionality</figcaption>

</figure>

<div class="list-paragraph">

### What could turn this into a large scale product? A few ideas:

*   A chrome extension similar to Grammarly that reads your writing and suggests words based on your companies tone of voice.
*   A text editor that provides recommendations as you type based on the pre-set tone of voice guidelines.
*   Classification for different contexts (e.g. this is the tone of voice for Customer Support vs Twitter vs Help Documentation.

</div>

### Wrapping Up:

This project was a really great experience. It started naturally as I ran into the problem of needing to learn how to sound like Slack — and it was a great lesson in creatively solving a problem. It also helped me respect copywriters, product writers and writers in general even more. Writing effectively is such an admirable skill!

One particular stand out for me is how I was able to use Python and JavaScript tools to help achieve a goal without knowing them with any depth. Googling and perseverance goes a long way!

**PS:** I want to give a shout-out to [@annapickard](https://twitter.com/annapickard), who I highly recommend you follow on Twitter. Their commitment to words inspired me to invest the time in this — and I’d encourage you to check out their podcast appearances and blog posts listed throughout this post.

<section class="cs-article__text--type-constraints cs-article__layout--sm-media-query cs-article__layout--64px-spacer">

<header>

### Want to read more?

</header>

Read my [Character Counter Case Study,](https://medium.com/@jasontcrabtree/building-character-counter-2670b30a7ef0) with details on launching on Product Hunt, iterating based on feedback and building a tool to use daily.

Or check out my [Blog](https://blog.jasontcrabtree.com) for posts on Design, Strategy, Code & anything else I've found been thinking about.

</section>

</article>

</main>

<footer class="footer-style footer--layout cs-footer__layout">

Social ✌️

*   [![Twitter](/assets/icons/Twitter-Logo.svg)](https://twitter.com/jasontcrabtree) 
*   [![RSS](/assets/icons/Rss.svg)](https://blog.jasontcrabtree.com/feed.xml) 
*   [![Dribbble](/assets/icons/dribbble-logo.svg)](https://dribbble.com/jasontcrabtree) 
*   [![GitHub](/assets/icons/GitHub-Logo.svg)](https://github.com/jasontcrabtree) 

</footer>

</nav>