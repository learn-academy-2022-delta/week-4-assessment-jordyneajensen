# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

#define a method with param is num
#conditionals to evaluate for odd or even
# use string interpoloation
# invoke the function

def odd_or_even(num)
    if num.even?
        "#{num} is even"
    else num.odd?
        "#{num} is odd"
    end
end

p odd_or_even(num1)
p odd_or_even(num2)
p odd_or_even(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

#define a method called vowel removal and a parameter 
#

def vowel_removal(string)
    string.delete("aeiouAEIOU")
end

p vowel_removal(album1)
p vowel_removal(album2)
p vowel_removal(album3)



# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_tester1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_tester2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_tester3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def palindrome(tester)
    if tester.casecmp(tester.reverse) == 0
        "#{tester} is a palindrome"
    else
        "#{tester} is not a palindrome"
    end
end

p palindrome(palindrome_tester1)
p palindrome(palindrome_tester2)
p palindrome(palindrome_tester3)
