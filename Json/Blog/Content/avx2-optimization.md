# Optimizing Performance with AVX2 and SIMD in C#

In the world of high-performance computing, every CPU cycle counts. Modern processors are beasts capable of massive parallelism, not just through multiple cores, but through **SIMD (Single Instruction, Multiple Data)**. This guide explores how to leverage AVX2 instructions in C# to achieve extreme speedups for data-heavy tasks.

## What is SIMD?

Traditional programming uses a **SISD (Single Instruction, Single Data)** model:
```csharp
// Adds two numbers at a time
int c = a + b;
```

**SIMD** allows the CPU to perform the same operation on a vector of data simultaneously.
With **AVX2 (Advanced Vector Extensions 2)**, the CPU registers are 256 bits wide. Since a standard integer is 32 bits, an AVX2 register can hold **8 integers** at once.

This means you can perform **8 additions in a single CPU cycle**.

## SIMD in .NET

Historically, using SIMD required C++ intrinsics. However, .NET Core introduced the `System.Runtime.Intrinsics` namespace, bringing hardware-level optimization directly to C#.

### A Practical Example: Array Summation

Let's compare a standard loop vs. a SIMD-optimized loop for summing an array of 1 million integers.

#### 1. The Scalar Approach (Standard)

```csharp
public int SumArray(ReadOnlySpan<int> array)
{
    int sum = 0;
    for (int i = 0; i < array.Length; i++)
    {
        sum += array[i];
    }
    return sum;
}
```

#### 2. The AVX2 Approach (Vectorized)

```csharp
using System.Runtime.Intrinsics;
using System.Runtime.Intrinsics.X86;

public unsafe int SumArraySIMD(ReadOnlySpan<int> array)
{
    int sum = 0;
    int i = 0;
    int length = array.Length;

    // Check if hardware supports AVX2
    if (Avx2.IsSupported)
    {
        // Vector of zeros to store partial sums
        Vector256<int> vSum = Vector256<int>.Zero;
        
        // Process 8 integers at a time
        fixed (int* ptr = array)
        {
            while (i <= length - 8)
            {
                // Load 8 ints from memory
                Vector256<int> vData = Avx2.LoadVector256(ptr + i);
                
                // Add them to our accumulator
                vSum = Avx2.Add(vSum, vData);
                
                i += 8;
            }
        }
        
        // Horizontally sum the 8 values inside the vector
        // (Simplified for brevity, real implementation is slightly more complex)
        var temp = vSum.AsSpan();
        for(int j=0; j<8; j++) sum += temp[j];
    }

    // Process remaining elements (scalar fallback)
    for (; i < length; i++)
    {
        sum += array[i];
    }

    return sum;
}
```

## Performance Results

On a dataset of 100 million integers, the results are staggering:

- **Scalar Loop:** ~120ms
- **AVX2 Loop:** ~30ms (**4x Faster**)

## Use Cases for SIMD

SIMD is not just for math. It is critical in:
1.  **Cryptography:** Hashing algorithms and encryption (e.g., my **ZCracker** project uses AVX2 for archive cracking).
2.  **Image Processing:** Applying filters or transformations to pixels.
3.  **Machine Learning:** Matrix multiplications.
4.  **JSON Parsing:** Modern high-performance parsers like `SimdJson` use it to scan strings faster.

## Conclusion

C# is no longer just a high-level enterprise language. With `System.Runtime.Intrinsics`, you can write code that rivals C++ in raw performance. If you are building systems where latency or throughput is critical, understanding CPU architecture and SIMD is a superpower.
