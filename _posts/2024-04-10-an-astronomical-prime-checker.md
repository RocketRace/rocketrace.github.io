---
layout: post
title: An Astronomical Prime Checker
slug: prime-checker
categories: programming mathematics
published: false
---

For [round #17][cg17] of the [Esolangs Code Guessing challenge][cg], I submitted a strange program that determines whether an input number is prime. It turns out that this program has a time complexity on the order of $O\left({\left(N^2\right)}^{N^2}\right)$, which is astronomical! In order to understand this staggering figure, and to verify that the program actually checks for prime numbers, we'll take a brief tour through abstract algebra. We'll hopefully emerge slightly less confused!

<!--more-->

First, we need to actually see the program! I won't paste the [whole thing][cg17me] here, because it contains a lot of noise that's not relevant to the actual algorithm itself. (However, it's a fun read if you're not afraid of cursed Python!) Instead, below is a pseudocode version that we'll go through **step by step**.

```rs
fn is_prime(n: Int) -> Bool = {
    set = [1..n]
    for plus_choices in set.product(n^2):
        plus = plus_choices.reshape(n, n)
        for plus_choices in set.product(n^2):
            times = times_choices.reshape(n, n)
            if set.powerset().filter(s => is_field(s, plus, times)).length() == 1:
                return true
    return false
}

fn is_field(set: List<Int>, plus: Matrix<Int>, times: Matrix<Int>) -> Bool = {
    set.exists(zero, one =>
        set.for_all(x, y, z =>
            set.exists(minus_x, x_inverse =>
                   plus[x, y]            == plus[y, x]
                && plus[x, plus[y, z]]   == plus[plus[x, y], z]
                && times[x, y]           == times[y, x]
                && times[x, times[y, z]] == times[times[x, y], z]
                && times[x, plus[y, z]]  == plus[times[x, y], times[x, y]]
                && plus[x, zero]         == x
                && times[x, one]         == x
                && plus[x, minus_x]      == zero
                && (times[x, x_inverse]  == one || x == zero)
                && zero                  != one
            )
        )
    )
}
// I will explain this all!
```

## A primer on set theory





[cg]: https://cg.esolangs.gay/info
[cg17]: https://cg.esolangs.gay/17
[cg17me]: https://cg.esolangs.gay/17#12
[product]: https://en.wikipedia.org/wiki/Cartesian_product
[powerset]: https://en.wikipedia.org/wiki/Powerset
