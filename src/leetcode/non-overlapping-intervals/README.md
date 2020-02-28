# README

## Algorithm

First of all, sort intervals by start time.

`pre` points to the previous interval that is not removed.
`nRemoved` stores number of intervals to remove

Iterate over intervals.

If previous interval is overlapped with current one, increment `nRemoved` by one and preserve the one with earlier end time. That is, set `pre` to the one with earlier end time.

Otherwise, set `pre` to current one.
