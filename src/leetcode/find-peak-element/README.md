# README

## Algorithm

Peak element is defined as the element that is greater than its neighbors. And also define that element is greater than boundary.

`[1,3,1]`
`[1,2,3]`

`3` in both arrays are defined as a peak element.

So we can use binary search to always search in the range that contains a greater element than `arr[mid]`.
