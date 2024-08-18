#!/usr/bin/env python3
"""
Random and asyncio modules are imported
"""
import asyncio
import random
from types import List


wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    n - - int 
    max_delay -- int 
    Return: the list of delay time with asceding order 
    """
    delays: List[float] = []
    for i in range(n):
        delays.append(await wait_random(max_delay))
    return sorted(delays)
