# Text Passage Processor list

## Usage
* Text processors are the `.commands arg1 arg2` that starts with a single `.` dot
* They allows you to add more functionality to your linear stories
* Text processors could be created by the User if need
* [Create Custom Processor](TextPassageCreateProcessors.md)

---


### Settings
* Set text positioning
```
pos top
pos center
pos bottom
```

* Set background image
```
bg "home.png"
```

### Visual
* Print image
```
img "image.png"
```

* Print horizontal line
```
---
```

* Print title text
```
# The titled text
```

* Passage link
```
pass "Link caption" "Passage name"
```

* Typing Text
```
.. The typing text
```


### Background Canvas
* Show image at some position
	* ⚠️ Erased on next button press
```
show left "picture.png"
show center "picture.png"
show right "picture.png"
```


### Audio
* Play music
```
.mus "music1.mp3"
```

* Stop music
```
.mus stop
```

* Play sound
```
.sound "Bird.ogg"
```



### Timing
* Waiting for couple of seconds
* Argument `next` click next button automatically
```
.wait 3
.wait 3 next
```