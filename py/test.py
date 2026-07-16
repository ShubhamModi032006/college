# # name = "shubham"
# # age = 20
# # num = 2.0

# # print("type of name :", type(name))
# # print("type of age :", type(age))
# # print("type of num :", type(num))



# # num1 = int(input("Enter first number: "))
# # num2 = int(input("Enter second number: "))

# # print("Sum:", num1 + num2)
# # print("Difference:", num1 - num2)
# # print("Product:", num1 * num2)

# # if num2 != 0:
# #     print("Devide:", num1 / num2)
# # else:
# #     print("Quotient: Cannot divide by zero")


# x = "5"
# y = 3
# print(x * y)



# a = "where are you from?"

# b = "what's your name?"

# print(type(a))
# print(b)


# a = "Python is Larg Language"

# print(a[8::-1])

# print(a.lower())
# print(a.upper())
# print(a.title())
# print(a.capitalize())
# print(a.swapcase())



a = "----helllo world-----------"

# print(a.strip("-"))
# print(a.lstrip("-"))
# print(a.rstrip("-"))


# # a = "hello"

# # b = a


# print(id(a))
# print(id(b))

# print(a.find("--"))
# print(a.index("xy"))
# print(a.count("-"))


# a = [10, 20, 30, 40]
 

# print(a[-2:])
# print(a[-100:])
# print(a[5:])
# print(a[0:-2])
# print(a[::-1])
# print(a[4::-1])
# print(a[99:0:-1])
# print(a[-2::-1])
# print(a[4:-100:-1])
# print(a[::-1])
# print(a[4:-2:-1])
# print(a[3:99:-1])



# print(bool([]))
# print(bool([0]))
# print(bool(""))
# print(bool("False"))




# result = True + True + False + True
# print(result)




# 0.0001 <= learning_rate <= 0.1


# print(not not True)



# a = [1, 2, 3]
# b = [1, 2, 3]

# print(a == b)
# print(a is b)




# batch_size = batch_size or 32


# predictions = []

# if not predictions:
#     print("No predictions")


# 0 < temperature < 2


# print(0 == False)
# print(0 is False)



# def is_valid_config(config):
#     return config is not None and config != {}


# def is_valid_checkpoint(path):
#     return (
#         bool(path)
#         and " " not in path
#         and (path.endswith(".pt") or path.endswith(".pth"))
#     )


# converged = False
# loss = 1.0
# threshold = 0.01

# while not converged:
#     print("Training...")
#     loss *= 0.5
#     if loss < threshold:
#         converged = True

# print("Training complete")


# import torch

# use_gpu = True

# if use_gpu and torch.cuda.is_available():
#     print("Training on GPU")
# else:
#     print("Falling back to CPU")







# num = [10,20,30,40,50]
# print(num[0], num[-1])


# print(num[1:4])


# num.insert(len(num),60)
# print(num)


# arr = sorted(num, reverse=True)
# print(arr)


# print(num.count(20))








# a = {
#     "name" : "shubham",
#     "age" : 20
# }

# print(a)


# a = dict(name="shubham", age=20)



# d = [("a", 1), (b, 2), (5, 5), (6, 6)]

# a  =  dict(d)

# print(a)
# print(d)





#  lembda function


# def square(num) : 
#     return num ** 2

# # temp = lambda x : x ** 2 

# # print(square(4))
# # print(temp)




# def great(name) :
#     print(f"Hello {name}")

# great("name")


# def is_even(num) :
#     return num % 2 == 0

# print(is_even(9))

# def noth():
#     print("Nothing to return")

# print(noth())


# def sum_three(a,b,c):
#     return a + b + c

# print(sum_three(0, 0, 0))

# def power(base, exp = 2):
#     return base ** exp

# print(power(2))


# def sum_all(*nums):
#     return sum(nums)

# print(sum_all(1, 2, 3, 4, 5))


# def dust_info(**info) :
#     for key, value in info.items():
#         print(f"{key}: {value}")

# dust_info(name="shubham", age=20, city="pune")



# def min_max_avg(nums):
#     return min(nums), max(nums), sum(nums) / len(nums)

# print(min_max_avg([5,8,9,6,3,4]))



# larger = lambda a, b: a if a > b else b
# print(larger(10,5))

# # 


# def count_vow(s):
#     vowels = "aeiouAEIOU"
#     count = 0
#     for char in s:
#         if char in vowels:
#             count += 1
#     return count

# print(count_vow("Hello World"))



# def apply_twice(square, num):
#     return square(square(num))

# print(apply_twice(square, 3))



# num = [1,-2,-3,1,5,-4]
# res = list(map(lambda x: x ** 2, list(filter(lambda x: x > 0, num))))

# print(res)






