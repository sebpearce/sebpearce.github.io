---
title: "Firewood: a solution for Kindle clippings"
date: "2014-02-06"
---

# Firewood: a solution for Kindle clippings

GitHub link: [https://github.com/sebpearce/firewood][firewood]

**Update for April 2015: With the help of a few generous individuals, Firewood has been rewritten Firewood in Python, and it’s called Pyrewood. It has more functionality and outputs Windows-friendly filenames. See the GitHub link.**

The best feature of the Kindle is its ability to clip sections of text and append them to a text file called `My Clippings.txt`. The fact that Amazon decided to use plain text as a storage method is great because it makes it easy to work with.

If you’re like me, you hate the idea of losing track of good ideas you come across while reading, but don’t want to have to write them down every time. The solution is to clip anything you want to remember.

What I do is clip only the parts of a book that I think are worth remembering. Then, a few weeks later, I come back and read my abridged version without all the chaff. I got this idea from Robert Greene’s [index card][reddit] technique as modified by [Ryan Holiday][ryan]. If you set recurring calendar reminders to review your notes periodically and then actually do it, you can avoid forgetting the good stuff.

The problem is, it’s hard to make this abridged version because the Kindle just appends your clippings one after the other in the order you clipped them. So if you read more than one book at the same time, it becomes difficult to find the info you want by scrolling through it. One solution is to use [Clippings.io][cc], which saves your clippings and lets you view them by title, <s>but it doesn’t allow you to generate plain text files, which is what I wanted</s> (**Edit**: now it does, but only one at a time &mdash; Firewood does the whole lot at once). Why are text files better? Among other things, they allow you to take advantage of search capabilities in other software (such as the search feature in Spotlight on Mac OS) for quickly finding a note.

Anyway, I wrote [a program][firewood] in C that will parse your `My Clippings.txt` file and generate an organised list of text files, one per book. It strips away all the unnecessary info about the date, location, etc. so you can just read it straight through.

It’s a command-line application <s>so you’ll need to be familiar with the terminal if you use a Mac or Linux</s> (**Edit: I’ve made a Mac desktop app version that you can just double-click to run — [download it here][dropboxlink]**). No Windows support yet.

See the [README][firewood] for details on how to use it.

If you find it useful or have feature requests, [let me know][email].

[dropboxlink]: https://www.dropbox.com/sh/je8x7m3ge1gqwdr/AAAVbp6xFFD2bEVVGMQmz0HAa
[firewood]: https://github.com/sebpearce/firewood
[reddit]: http://www.reddit.com/r/IAmA/comments/1cmb0d/i_am_robert_greene_author_of_the_48_laws_of_power/c9hv3g8
[ryan]: http://thoughtcatalog.com/ryan-holiday/2013/04/read-to-lead-how-to-digest-books-above-your-level/
[cc]: http://www.clippings.io/
[email]: mailto:sebpearce@gmail.com
