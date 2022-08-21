
---
title: zipfs-law
type: page
---
# zipfs-law

```py
ranked = sorted(RANK.items(), key=lambda x: x[1], reverse=True)
most_used = "\n" + "".join([f"-  {x}: {y}\n" for x, y in ranked[:10]])
least_used = "\n" + "".join([f"-  {x}: {y}\n" for x, y in ranked[-10:]])
```

![image](https://user-images.githubusercontent.com/35516367/131443772-87337441-4916-4eb6-8021-158dfa4d2f88.png)
![image](https://user-images.githubusercontent.com/35516367/131443865-111448ed-85d6-4cf8-8d63-9d8b2bebfc05.png)
