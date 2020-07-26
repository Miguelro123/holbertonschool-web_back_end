#!/usr/bin/env python3

"""
1. Let's execute multiple coroutines at the same time with async
"""

import asyncio
import random
from typing import List

wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with max_delay.
    """
    tasks = []
    delays = []

    for _ in range(n):
        tasks.append(asyncio.create_task(wait_random(max_delay)))
        
    # Create queue with results depending on the function have the result ready
    # Read more: shorturl.at/grAUY
        
    for task in asyncio.as_completed(tasks):
        delays.append(await task)

    return delays
