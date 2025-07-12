# Experiment Title:
**Write a Program for Iterative and Recursive Binary Search**

## Objective:
To understand and implement Binary Search using both iterative and recursive methods, and compare their execution behavior.

## Aim:
To write C++ programs that implement:
1. Iterative Binary Search
2. Recursive Binary Search

## Theory:

Binary Search is a divide-and-conquer algorithm used to search an element in a **sorted array**. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, it narrows the interval to the lower half. Otherwise, it narrows it to the upper half. The process continues until the value is found or the interval is empty.

- **Time Complexity:** O(log n)
- **Space Complexity:**
  - Iterative: O(1)
  - Recursive: O(log n) due to function call stack

### Recursive Binary Search:
The function keeps calling itself with a reduced range (low to mid-1 or mid+1 to high).

### Iterative Binary Search:
A while loop is used to eliminate recursion, reducing memory overhead.

---

## Program:

### C++ Code for Iterative and Recursive Binary Search:

```cpp
#include <iostream>
using namespace std;

// Recursive Binary Search
int recursiveBinarySearch(int arr[], int low, int high, int key) {
    if (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == key)
            return mid;
        else if (arr[mid] > key)
            return recursiveBinarySearch(arr, low, mid - 1, key);
        else
            return recursiveBinarySearch(arr, mid + 1, high, key);
    }
    return -1;
}

// Iterative Binary Search
int iterativeBinarySearch(int arr[], int n, int key) {
    int low = 0, high = n - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2;

        if (arr[mid] == key)
            return mid;
        else if (arr[mid] < key)
            low = mid + 1;
        else
            high = mid - 1;
    }

    return -1;
}

int main() {
    int n, key;

    cout << "Enter the number of elements: ";
    cin >> n;

    int arr[n];
    cout << "Enter " << n << " sorted elements:\n";
    for (int i = 0; i < n; i++)
        cin >> arr[i];

    cout << "Enter the element to search: ";
    cin >> key;

    // Recursive Binary Search
    int recResult = recursiveBinarySearch(arr, 0, n - 1, key);
    if (recResult != -1)
        cout << "Recursive: Element found at index " << recResult << endl;
    else
        cout << "Recursive: Element not found\n";

    // Iterative Binary Search
    int iterResult = iterativeBinarySearch(arr, n, key);
    if (iterResult != -1)
        cout << "Iterative: Element found at index " << iterResult << endl;
    else
        cout << "Iterative: Element not found\n";

    return 0;
}
