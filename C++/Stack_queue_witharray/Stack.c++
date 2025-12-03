#include <iostream>
using namespace std;

class Stack {
private:
    int arr[100];     // fixed size array
    int top;          // index of the top element
    int capacity;     // maximum size of stack

public:
    // constructor
    Stack(int size) {
        capacity = size;
        top = -1;
    }

    // push operation
    void push(int x) {
        if (top == capacity - 1) {
            cout << "Stack Overflow" << endl;
            return;
        }
        arr[++top] = x;
        cout << x << " pushed into stack" << endl;
    }

    // pop operation
    int pop() {
        if (top == -1) {
            cout << "Stack Underflow" << endl;
            return -1;
        }
        return arr[top--];
    }

    // peek operation
    int peek() {
        if (top == -1) {
            cout << "Stack is empty" << endl;
            return -1;
        }
        return arr[top];
    }

    // isEmpty
    bool isEmpty() {
        return top == -1;
    }

    // isFull
    bool isFull() {
        return top == capacity - 1;
    }
};

int main() {
    Stack st(5);

    st.push(10);
    st.push(20);
    st.push(30);

    cout << "Top element is " << st.peek() << endl;

    cout << "Popped: " << st.pop() << endl;
    cout << "Popped: " << st.pop() << endl;

    cout << "Is stack empty? " << (st.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
