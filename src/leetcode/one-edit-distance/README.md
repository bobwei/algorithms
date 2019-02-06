## README

### Algorithm

- Iterate over s and t, find out the first different character.
  - If `s.length < t.length`, insert a character to s at `i` and compare with t.
  - If `s.length > t.length`, delete a character from s at `i` and compare with t.
  - If `s.length === t.length`, replace a character in s at `i` and compare with t.
- If all characters are the same, it's valid only if they have only 1 diff in length.
