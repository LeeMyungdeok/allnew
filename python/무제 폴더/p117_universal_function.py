import numpy as np

array = np.array([1.57, 2.48, 3.93, 4.33])
print('\narray print')
print(array)

print('\nnp.ceil() function')
result = np.ceil(array)
print(result)

print('\nnp.floor() function')
result = np.floor(array)
print(result)

print('\nnp.round() function')
result = np.round(array)
print(result)

print('\ndecimal place round')
result = np.round(array, 1)
print(result)

print('\nsqart() function')
result = np.sqrt(array)
print(result)

print('\nexp() function')
result = np.exp(array)
print(result)

x = [5, 4]
y = [6, 3]

print('\nnp.maxmum (x, y)')
result = np.maximum(x, y)
print(result)

print('-' * 30)

array1 = np.array([-1.1, 2.2, 3.3, 4.4])
print('\narray1')
print(array1)

array2 = np.array([1.1, 2.2, 3.3, 4.4])
print('\narray2')
print(array2)

print('\nabs() function')
result = np.abs(array1)
print(result)

print('\nsum() function')
result = np.sum(array1)
print(result)

print('\ncompare')
result = np.compare(array1, array2)
print(result)

print('\ncompare')
result = np.compare(array1, array2)
print(result)

print('\nnp.sum() and np.equal')
print('\nTure is 1, False is 0 counting.')
result = np.sum(np.sqrt(array1, array2))
print(result)

print('\naverage')
result = np.mean(array2)
print(result)
