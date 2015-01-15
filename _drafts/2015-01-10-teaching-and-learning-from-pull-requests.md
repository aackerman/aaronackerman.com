---
layout: post
title: It's dangerous to go alone!
categories: []
tags: []
published: True

---

When developing software with other people, code review is important. It's a sign that a project or part of a project is nearing completion or a bug is nearly fixed. Code review also allows feedback from other contributors.

I see opening a pull request as a learning opportunity and reviewing a pull request as a teaching opportunity. I hope my peers will offer some honest and constructive feedback about how code that I've written can be improved with structure, readability, or performance characteristics.

In open source, a complex pull request should come with an upfront discussion with the maintainer. The maintainer may have no interest in the changes you intend to make so it's best to not waste anyone's time if the work is unlikely to get merged.

**It's worth the time to have a conversation.**

My thoughts here mainly pertain to work with a team, where I know the people that will review my changes. I know them as a person, instead of text or pixels on a screen. But respect is paramount no matter what type of interpersonal dynamic is at hand. Mixed messages are far more common in text-only matters where body language and tone are not in play.

During code review, when I see syntax or a construct with which I am unfamiliar I make a point to ask a question, "Is this correct?", "How does this syntax work?", "Is there a clearer way to express this?". Usually I can learn something from the answer.

If I understand the code but I would write it clearer myself I will offer a suggestion for a fix including an implementation, possibly in pseudo-code.

If indentation is off I assume the author didn't see the mistake and comment where the fix should be made. If three or four lines are hard to read due to formatting or a line is too long, responding with the exact suggested fix is much better than responding with "Fix formatting here."

## Self review

I always hope that I don't have to make nitpicking comments about formatting. I make a habit of reviewing diffs before committing, and checking if there are any obvious formatting mistakes. When I create a pull request I self-review all of the changes, and  hope I can fix them before another person looks, comments, and my inbox is flooded. No reason to waste another person's time if reviewing the changes myself will save all reviewers some time.

## The learning part

When reviewing pull requests, sometimes I will see this commit message, "Made changes based on PR feedback." Those words are hard to read. They can convey several messages including, "I don't agree with your feedback", and "I don't understand what you're talking about but I'll make the changes". It's very unfortunate for me when I see those words. It tells me the writer wasn't able to create a meaningful commit message because they didn't understand the changes or why they might be necessary. It also means I wasn't able to teach them or they are unwilling to learn.

## Humility

Code review is about feedback and constructive criticism. It *should not* be personal.

## Things to avoid in pull requests

* Long posts
* +1's
* Joke responses to feedback
* Ignoring feedback
* Ignoring tests
* Taking feedback personally
