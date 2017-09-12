---
layout: post
title: Interview race conditions
categories: []
tags: []
published: True
---

I recently asked an interviewee a question about APIs. The question was along the lines of, "Explain how you would ensure that a signup API allows only unique emails." The interviewee wasn't aware of unique database constraints in SQL database. Adding a unique constraint to the column containing the users email will ensure that only unique emails can signup, it would also be prudent to store all of the emails in lowercase characters.

The interviewee's answer was essentially, "check if the email exists before allowing the user to signup." In many cases this would be fine. The user would sign up and after the record is created the API would check if the users exists and prevent other users from signing up with a duplicate email.

However, if there are multiple ways to sign up that duplication check has to be performed everywhere, if one is missed there could be duplicate emails in the database. Aside from this, to simply "check if the email exists before allowing the user to signup" allows for a race condition.

It could be the case that the form was improperly implemented and allows the user to click sign up multiple times while the user is being signed up. In this case there could be multiple requests in-flight at the same time. Each request to the API could check whether the email for the user is unique, and each one receives the same answer, that the email doesn't exist yet. At this point each request moves along with creating the user and now multiple copies of the same user exist in the database 😱.

These are subtle software problems, that assuredly exist in many different APIs.

In this instance the solution that I outlined is a simple one and this problem can be avoided.
