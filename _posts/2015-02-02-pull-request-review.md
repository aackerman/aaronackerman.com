---
layout: post
title: Pull Request Review
categories: []
tags: []
published: True

---

When developing software with other people, code review is important. It's a sign that a project or part of a project is nearing completion or a bug is nearly fixed. Code review also allows feedback from other contributors. Opening a pull request can be a learning opportunity for both the implementer and the reviewers.

In open source, a complex pull request should come with an upfront discussion with the maintainer. The maintainer may have no interest in maintaining the changes you intend to make so it's best to not waste anyone's time if the work is unlikely to get merged.

**It's worth the time to have a conversation.**

My thoughts here mainly pertain to work with a team, where I know the people that will review my changes. I know them as a person, instead of text or pixels on a screen. But respect is paramount no matter what type of interpersonal dynamic is at hand. Mixed messages are far more common in text-only matters where body language and tone are not in play.

During code review, when I see syntax or a construct with which I am unfamiliar I make a point to ask a question, "Is this correct?", "How does this syntax work?", "Is there a clearer way to express this?". Usually I can learn something from the answer. Avoid finger pointing and using the word 'you'. "Why did you do it this way," would be an example of a type of finger pointing to avoid.

If I understand the implementation but I have an idea for how it could be expressed in clearer terms I will offer a suggestion for a fix including an implementation, possibly in pseudo-code.

If indentation is off, I assume the author didn't see the mistake, and comment where the fix should be made. I like to ask a question like "Would you mind changing the formatting to something like this?" and follow up with a suggested implementation. If three or four lines are hard to read due to formatting or a line is too long, responding with the exact suggested fix is much better than responding with "Fix formatting here."

I always hope that I don't have to make nitpicking comments about formatting. I make a habit of reviewing diffs before committing, and checking if there are any obvious formatting mistakes. When I create a pull request I self-review all of the changes, and hope I can fix them before another person reviews, comments, and my inbox is flooded. No reason to waste another person's time if reviewing the changes myself will save all reviewers some time.

## The learning part

When reviewing pull requests, sometimes I will see this commit message, "Made changes based on PR feedback." Those words are hard to read. They can convey several messages including, "I don't agree with your feedback", and "I don't understand what you're talking about but I'll make the changes". It's very unfortunate for me when I see those words. It tells me the writer wasn't able to create a meaningful commit message because they didn't understand the changes or why they might be necessary. It also means I wasn't able to teach them or they are unwilling to learn.

## Humility

Code review is about technical feedback and constructive criticism, does it work, can you understand it today, will the changes be easy to understand tomorrow.

## Things to avoid in pull requests

These are simply my personal preferences, I like to stick to taking care of business.

* +1's
* Joke responses to feedback
* Joke comments on changes
* Ignoring feedback
* Ignoring tests
* Destructive criticism
* Demands instead of questions
* Finger pointing, using the word 'you'
* Taking feedback personally
