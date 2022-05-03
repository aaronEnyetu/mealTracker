## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
###To DOo List
1. Adding Ingredients
- [] Make my form
- [] Add form event listener
- [] Create an ingredient object from the form data
- [] Write `renderIngredient` function
- [] Write `displayIngredient` function(calling `renderIngredient` for each item)
2. Removing Ingredients
- [] Add my remove button
- [] Add event listener to button
- [] Remove the last item from the ingredients array
- [] Call `displayIngredients`
#####Add Ingredients Section#####
#HTML Elements 
-Heading
-Form with inputs for ingredients, quantity, measurements, button
-List for keeping track of ingredients 'ul'

##### Save Meal Section
#HTML Elements
*Heading
*Save Button
*Meal name input
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
#Add Ingredients Section
#Data Model (State)
-An array of ingredients with the following structure:
{
  ingredient: 'Black beans',
  quantity: 1,
  measurement: 'cups'
}

###Functions

- `renderIngredient` ---create an `<li>` for an ingredient object
-`displayIngredient` ---clear out the existing list, loop through each ingredient, call renderIngredient, append `<li>` to the list

1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
####Add Ingredients Section###
#Event(s)
-Add ingredient (form submit)
- Remove last Item (Button click)
####Save Meal Events####
#Event(s)
*save button click

#State
- Array of meals with the following structure:
```js
{
  name: 'Black bean Salad',
  ingredientCount: 2
}
```

1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
