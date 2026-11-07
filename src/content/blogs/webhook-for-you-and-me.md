---
title: Webhook for You and Me
description: Understand webhooks through an everyday story and a sample HTTP payload.
date: 2024-01-26
updated: 2026-07-12
author: Shahrear Ahamed
category: Software Engineering
words: ~991 words
subtitle: "You won’t (maybe) ever ask again: “What’s a webhook, mom?”"
---

I'm the kind of person who practices a habit to explain technical terms with everyday examples so that I don't need to memorize them as just technical jargon.

Maybe this process oversimplifies the term in some cases but who cares? As long as I understand how it works and don't struggle to remember it, I think I'm fine.

These days, we need to learn millions of things to keep ourselves up-to-date and it's already hard enough to do that. So, some oversimplification can't hurt.

So, in my attempt to explain webhooks to you today, I'll first tell you a 'knock-knock' story (not a joke, it's a serious story) and then we will move on to the technical part.

## The Story of Walter

There was a guy, let's call him Mr. Walter White. Yup, the nice guy from the TV series **Breaking Bad**.

Mr. White wants to start his own drug business and needs illegal chemicals to do that. So, he contacts a gangster guy, named Tuco Salamanca, who promises him to get the chemicals and they make a deal.

A few days later and Mr. White hasn't received the chemicals. So, he goes to Tuco's house:

> Knock, knock!
>
> => Who's there?
>
> => It's me, Walter White.
>
> => What do you want?
>
> => I've paid for something and didn't get it yet.
>
> => I know. You will get them soon. Now leave.

Walter White knows that this guy is crazy and he doesn't want to piss him off, so he leaves immediately.

After a couple more days, he gets impatient and goes back to Tuco's house:

> Knock, knock!
>
> => Who's there?
>
> => Me, Walter White.
>
> => What the @#$@ do you want?
>
> => Where is my stuff?
>
> => I already told you, you will get them soon.
>
> => How soon? It's more than a week.
>
> => Are you calling me a liar?
>
> => No, no. I just need an update.
>
> => I'll let you know when the package arrives. Don't ever come back again. Now get out of here.
>
> (Mr. White turns to leave but Tuco calls out)
>
> => Hey, just before you go, leave your phone number, so that I can call you.

So, Mr. White leaves his number. And the next day, he gets a call from Tuco that the package has arrived.

Our little story ends here.

## The Story of Webhooks

Let's get back to discussing webhooks.

We saw that, in our story, Tuco taught Mr. White that he is comfortable with the "don't call me, I'll call you" philosophy. Well, the same philosophy lies behind the Webhook concept.

You see, when we use an **API**, we call it when we need it. The process works in a request-response manner. We will request for the data and the API will respond.

So, if there is a service API from which you need to get updates regularly, you will call it frequently. The more frequent you call it, the more real-time updates you will get.

This is called _API polling_.

However, this is not a good approach because in most cases, you will not get any update, as there aren't any.

Also, it's a massive overhead for both sides in terms of resource usage.

On the other hand, if these services have a webhook available, then we just have to connect or 'hook' our application URL with it and it will knock us every time there is data available.

Just like Tuco did. When the package arrived, he called Mr. White. Simple as that.

And that's all you need to understand how a webhook works.

As most communications over the internet are through HTTP, both API and webhook use it extensively.

But a webhook doesn't use all of the `GET`, `POST`, `PUT`, `DELETE` methods like an API does.

It only makes an `HTTP POST` request (which is also known as HTTP callback) to the listener or the service that wants to get the update.

To the webhook, the listener will be a simple URL which it will call with an `HTTP POST` request for the specific event.

### Example webhook payload

`POST /api/webhooks/tuco`

```json
{
  "event": "package.delivered",
  "timestamp": "2026-07-12T14:32:00Z",
  "data": {
    "recipient": "Walter White",
    "item": "Methylamine (55 gal)",
    "status": "ready_for_pickup"
  }
}
```

## Why Would You Need a Webhook and Where Do You Use It?

Webhooks are mostly used in cases where a real-time notification or action needs to take place for certain events, such as Slack notifications, continuous integration services, and other integrations.

Webhooks can be used to exchange data between systems, components within a system, or microservices—anything attached via HTTP.

Say, you built an application that will show you an alert if there is a possibility of rain today, so you can bring your umbrella. Or, if somebody makes a commit in your project repository and you want to receive that as a notification in one of your Slack channels.

You see, in these cases, actions are taking place after a specific event occurs. So, for your weather application, you can connect it to a weather service webhook which will only send you a notification if there is a possibility of rain.

If you want to get real-time updates in your Slack channel for commits, you need to connect your GitHub account to Slack incoming webhooks so that it will receive messages on each commit.

## Benefits of Webhooks

In earlier times of the internet, all web applications worked in a silo and most still operate in the same way. With the rise of APIs, communication and integration between these applications occurred.

But as we've seen in our example, a key part of this communication (which is 'event-driven communication') was missing—webhooks come to the rescue.

Hopefully, this article was easy to understand. You should now be fine using webhooks provided by fancy web services or applications. You can also build your own webhook if needed.

They aren't too complicated.

Thanks for reading!
