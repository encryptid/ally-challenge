# Ally Code Challenge
Build a mock banking site for Ally

The principles, concepts, and philosophies of development that we value most and that you need to take into account in your submission are:
- [x] Web Standards
- [x] Semantic Markup
- [x] Performance
- [ ] Accessibility

### Technical Guidelines

- [x] Anchors on the page can just have “#” as their href.
- [x] Only jQuery & vanilla javascript allowed (no plugins).
- [x] No CSS libraries/frameworks may be used, however CSS (pre)processors like Sass are welcome for compiling your own css.
- [x] Rate table must be built-out and ordered correctly by consuming provided JSON file.
- [ ] Page should be responsive.
- [ ] Bonus-points for accessibility!

Unfinished:
- [ ] Verify responsiveness and add a few media queries
- [ ] Verify full functionality in:
    - [x] Chrome
    - [x] Firefox
    - [ ] IE9+
- [x] Finish functionality
- [ ] Check IE stability


## Final thoughts:
* I would have liked to make several (mostly) cosmetic tweaks, such as create some hover interactions, or cause the page to respond to clicking different sections in the nav
* I opted for a 'graceful degregation' approach, rather than mobile-first, thinking it was best to have a functional site that looked good in desktop if nothing else, and with whatever time I had, I would polish its responsiveness with media queries and a few other things. And while I'm disappointed I wasn't able to make it fully responsive, I'm glad I took that approach because ultimately I did end up running out of time.
* While I used Chrome to create the page and I viewed it in Firefox to ensure it looked good, I was not able to view the page in IE9 due to time constraints. I simply did not have time to host it and boot up a Windows machine (since I do not have a Virtual Machine installed on my Mac), so the site is not tested in IE, which may be a problem since I used flexbox and some ES6.
* I also intended to go back and add some accessibility items, such as `alt` info for `<img>` tags and so on.
* All things considered, it was kind of a fun exercise and I'm glad I had the opportunity to tackle it, I just wish I had more time.