/* ═══════════════════════════════════════
   PYTHON QUEST — SCRIPT.JS
   Zero to Hero · Fresh Rebuild
═══════════════════════════════════════ */

// ──────────────────────────────────────
// AUTH  (base64 encoded)
// ──────────────────────────────────────
const _A = { u: atob('SGFyaTA2MTE='), p: atob('MDYwMw==') };
let _loginAttempts = 5;

function doLogin() {
  const u = document.getElementById('inpUser').value.trim();
  const p = document.getElementById('inpPass').value.trim();
  const errEl = document.getElementById('loginErr');
  const attEl = document.getElementById('attLeft');

  if (u === _A.u && p === _A.p) {
    // SUCCESS
    errEl.classList.remove('show');
    const card = document.querySelector('.login-card');
    card.style.transition = 'all 0.4s ease';
    card.style.boxShadow = '0 0 80px rgba(0,255,136,0.4)';
    card.style.borderColor = 'rgba(0,255,136,0.5)';
    setTimeout(() => showScreen('s-title'), 500);
  } else {
    // FAIL
    _loginAttempts--;
    attEl.textContent = Math.max(0, _loginAttempts);
    const msgs = [
      'Machan wrong password da! NULLBYTE laughing! 😂',
      'Ayyo! Username or password thappu! 🤦',
      'ACCESS DENIED! Idhu yaaru? NULLBYTE agent-a? 👀',
      'Wrong credentials! Python therinja login try pannu! 😅',
      'Last attempt da! Careful macha! 😰'
    ];
    errEl.textContent = '❌ ' + (msgs[5 - _loginAttempts - 1] || 'ACCESS DENIED!');
    errEl.classList.add('show');
    const card = document.querySelector('.login-card');
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
    document.getElementById('inpPass').value = '';
    if (_loginAttempts <= 0) {
      document.getElementById('loginBtn').disabled = true;
      document.getElementById('loginBtn').textContent = '🔒 LOCKED';
      errEl.textContent = '🔒 Too many failed attempts. Refresh to try again.';
    }
  }
}

function toggleEye() {
  const inp = document.getElementById('inpPass');
  const btn = document.getElementById('eyeBtn');
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
  else { inp.type = 'password'; btn.textContent = '👁'; }
}

// Enter key on login
document.addEventListener('DOMContentLoaded', () => {
  const u = document.getElementById('inpUser');
  const p = document.getElementById('inpPass');
  if (u) u.addEventListener('keydown', e => { if (e.key === 'Enter') document.getElementById('inpPass').focus(); });
  if (p) p.addEventListener('keydown', e => { if (e.key === 'Enter') doLogin(); });
});

// ──────────────────────────────────────
// SCREEN MANAGER
// ──────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = '';
  });
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('active');
    el.style.display = (id === 's-game') ? 'flex' : 'block';
    window.scrollTo(0, 0);
  }
}

// ──────────────────────────────────────
// WORLDS DATA
// ──────────────────────────────────────
const WORLDS = [
  { id:1, name:'THE AWAKENING',      range:'1–20',   color:'#00d4ff', emoji:'🌐',
    desc:'System bootup. Warm up your Python instincts. NULLBYTE outer firewall awaits.',
    story:'World 1 down! Agent PYRO cracks the outer firewall. NULLBYTE: "You got lucky, coder. The real battle begins NOW." 🌐 Inner systems glow red...' },
  { id:2, name:'DECISION ENGINE',    range:'21–40',  color:'#bf00ff', emoji:'🔮',
    desc:'Conditions & branching logic. Every decision shapes the mission.',
    story:'World 2 cleared! NULLBYTE panics — "My conditional traps were perfect!" PYRO smirks: "Not perfect enough." 🔮 Core systems flicker...' },
  { id:3, name:'LOOP LABYRINTH',     range:'41–60',  color:'#ff6600', emoji:'🌀',
    desc:'Loops, iterations, patterns. Navigate the infinite cycle maze.',
    story:'World 3 conquered! NULLBYTE: "Infinite loops were supposed to trap you forever!" PYRO: "break statement, buddy." 🌀' },
  { id:4, name:'DATA VAULT',         range:'61–80',  color:'#00ff88', emoji:'🗄️',
    desc:'Strings, lists & algorithms. Crack NULLBYTE\'s encrypted data vault.',
    story:'World 4 breached! NULLBYTE\'s voice distorts: "My encrypted arrays... gone!" PYRO: "Data wants to be free." 🗄️ One world remains...' },
  { id:5, name:'THE FINAL NEXUS',    range:'81–100', color:'#ffdd00', emoji:'⚡',
    desc:'Advanced logic, puzzles & FINAL BOSS. This is what you trained for.',
    story:'🏆 THE NEXUS IS YOURS! NULLBYTE eliminated. Global network restored. Agent PYRO — LEGENDARY STATUS!' }
];

// ──────────────────────────────────────
// 100 LEVELS DATA
// ──────────────────────────────────────
const LEVELS = [

// ═══ WORLD 1 (1-20) ═══
{ id:1,  world:1, type:'mcq',
  title:'SYSTEM BOOT — Variable Types',
  story:'Agent, the system is waking up. First task: verify the variable types. NULLBYTE corrupted the type system.',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'In Python, type() tells you the data type. x = 5 means x is an int.',
  question:'What is the output of:\n\nx = 10\nprint(type(x))',
  opts:["<class 'str'>","<class 'int'>","<class 'float'>","TypeError"],
  ans:1, pts:80,
  explain:'type(10) returns <class \'int\'> — integers are Python whole number type.',
  meme:'"Ariyaama wrong panda... type-e theriyum, type check theriyaliya? 😂"' },

{ id:2,  world:1, type:'output',
  title:'SIGNAL DECODE — String Multiply',
  story:'The comms array is scrambled. Decode the string signal to restore contact.',
  badge:'output', badgeClass:'tb-output',
  hint:'String multiplication repeats the string. "abc" * 3 = "abcabcabc"',
  code:'s = "PY" * 3\nprint(s)',
  ans:'PYPYPY', pts:90,
  explain:'"PY" * 3 concatenates "PY" three times → PYPYPY',
  meme:'"Semma simple question wrong pandiya? NULLBYTE already winning da! 😭"' },

{ id:3,  world:1, type:'fill',
  title:'MEMORY PATCH — List Indexing',
  story:'Memory slots are corrupted. Fill the correct index to retrieve the encryption key.',
  badge:'fill', badgeClass:'tb-fill',
  hint:'Python lists are 0-indexed. First element is at index 0.',
  template:'keys = [42, 99, 7, 256]\nprint(keys[___])  # Should print 7',
  blanks:['2'], ans:['2'], pts:85,
  explain:'keys[2] → index 2 → value 7. Lists start at index 0.',
  meme:'"Index wrong panna — wrong memory access! System crash! 🤯"' },

{ id:4,  world:1, type:'mcq',
  title:'LOGIC GATE — Boolean Test',
  story:'The logic gate is malfunctioning. Determine the correct boolean output.',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Python boolean operators: and, or, not. True and False = False.',
  question:'What does this print?\n\nprint(True and False or True)',
  opts:['False','True','Error','None'],
  ans:1, pts:90,
  explain:'True and False = False, then False or True = True. "and" before "or".',
  meme:'"Boolean logic thayolaya? Intha level EASY da! 😤"' },

{ id:5,  world:1, type:'mcq',
  title:'BUG HUNT — Fix The Loop Range',
  story:'A critical loop is broken! The firewall cannot cycle. Debug it now!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'range() end is exclusive. range(1,6) gives 1,2,3,4,5.',
  question:'Fix the code to print numbers 1 to 5:\n\nfor i in range(1, 4):\n    print(i)',
  opts:['range(1, 5)','range(1, 6)','range(0, 5)','range(5)'],
  ans:1, pts:95,
  explain:'range(1, 6) generates 1,2,3,4,5 — end is exclusive, use 6 to include 5.',
  meme:'"Range wrong pachi 1 to 4 matume print aagathu... NULLBYTE laughing! 😂"' },

{ id:6,  world:1, type:'output',
  title:'DATA STREAM — List Slicing',
  story:'Slicing through NULLBYTE\'s data stream. What survives the slice?',
  badge:'output', badgeClass:'tb-output',
  hint:'Python slicing: list[start:end] — end is exclusive.',
  code:'data = [10, 20, 30, 40, 50]\nprint(data[1:4])',
  ans:'[20, 30, 40]', pts:90,
  explain:'data[1:4] extracts indices 1,2,3 → [20, 30, 40]. Index 4 is excluded.',
  meme:'"Slicing pannama full list print panniruntha, NULLBYTE impressed aagiduvaan 😅"' },

{ id:7,  world:1, type:'mcq',
  title:'FUNCTION FORGE — Return Values',
  story:'The function forge needs repair. What does this function return?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'A function without a return statement returns None in Python.',
  question:'What is the output?\n\ndef hack():\n    x = 42\n\nprint(hack())',
  opts:['42','0','None','Error'],
  ans:2, pts:95,
  explain:'No return statement → implicitly returns None. print(None) prints "None".',
  meme:'"Return statement bhool gaya? Python bhi bhool gaya tujhe 😂"' },

{ id:8,  world:1, type:'fill',
  title:'STRING CIPHER — F-String',
  story:'Encrypt the agent name into the message template. Fill in the blank!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'f-strings: f"Hello {variable}" — curly braces inject the variable value.',
  template:'name = "PYRO"\nmsg = f"Agent ___ reporting!"\nprint(msg)',
  blanks:['{name}'], ans:['{name}'], pts:85,
  explain:'f-strings use {variable} syntax. f"Agent {name}..." injects the value.',
  meme:'"F-string bhool gaya? Enna machan, basic format vera theriyaliya? 😤"' },

{ id:9,  world:1, type:'output',
  title:'DICT DUPLICATE — Key Overwrite',
  story:'NULLBYTE hides in duplicate dictionary keys. Detect the trap!',
  badge:'output', badgeClass:'tb-output',
  hint:'Dictionaries cannot have duplicate keys — later value overwrites earlier.',
  code:'d = {"a":1, "b":2, "c":3, "a":4}\nprint(len(d))',
  ans:'3', pts:100,
  explain:'Dict cannot have duplicate keys. "a" appears twice, overwritten. Final has 3 keys: a, b, c.',
  meme:'"Duplicate key! NULLBYTE\'s favorite dictionary trick! 😈"' },

{ id:10, world:1, type:'mcq',
  title:'SCOPE SCANNER — Variable Visibility',
  story:'The scope scanner detects variable leaks. Is the local variable accessible outside?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Variables defined inside a function are local — not accessible outside.',
  question:'What happens when you run this?\n\ndef secret():\n    code = 999\n\nsecret()\nprint(code)',
  opts:['999','0','None','NameError'],
  ans:3, pts:100,
  explain:'"code" is local to secret(). Outside the function, it does not exist → NameError.',
  meme:'"Local variable la hand vekkatireenga? NameError thaan varum! 😂"' },

{ id:11, world:1, type:'mcq',
  title:'SYNTAX BREACH — Indentation',
  story:'NULLBYTE injected bad indentation. Fix the IndentationError!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'Python uses 4 spaces to define code blocks — indentation is mandatory.',
  question:'Which line has the bug?\n\ndef greet(name):\nprint(f"Hello {name}")\n    return name',
  opts:['Line 1 — missing colon','Line 2 — wrong indent','Line 3 — return error','No bug'],
  ans:1, pts:95,
  explain:'Line 2 (print) must be indented inside the function. Python uses indentation as blocks.',
  meme:'"Indentation miss pannina, Python literally gaslights you! 😤"' },

{ id:12, world:1, type:'output',
  title:'MUTATION MODULE — List Methods',
  story:'The list module is mutating. Track the changes!',
  badge:'output', badgeClass:'tb-output',
  hint:'list.append() adds to end. list.pop(0) removes first element.',
  code:'arr = [1, 2, 3]\narr.append(4)\narr.pop(0)\nprint(arr)',
  ans:'[2, 3, 4]', pts:95,
  explain:'Start:[1,2,3] → append(4):[1,2,3,4] → pop(0) removes index 0:[2,3,4]',
  meme:'"List mutation wrong predict panniruva? NULLBYTE hacked your brain! 😂"' },

{ id:13, world:1, type:'mcq',
  title:'MATH MODULE — Floor Division',
  story:'Calculate the firewall bypass code using integer division!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'// is floor division in Python. 7 // 2 = 3, not 3.5',
  question:'What is the output of:\n\nprint(17 // 5)',
  opts:['3.4','3','2','4'],
  ans:1, pts:80,
  explain:'17 // 5 = floor(17÷5) = floor(3.4) = 3. The % operator gives remainder.',
  meme:'"Floor division result paatha shock aagiduveenga 😂"' },

{ id:14, world:1, type:'fill',
  title:'TERNARY TRAP — One-liner Condition',
  story:'The ternary circuit is broken. Fill in the missing keywords!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'Python ternary: value_if_true if condition else value_if_false',
  template:'x = 10\nresult = "even" ___ x % 2 == 0 ___ "odd"\nprint(result)',
  blanks:['if','else'], ans:['if','else'], pts:90,
  explain:'Python ternary: "even" if x%2==0 else "odd" — reads like English!',
  meme:'"Ternary operator miss panniruva? One-liner magic theriyaliya? 😅"' },

{ id:15, world:1, type:'output',
  title:'SET THEORY — Duplicate Destroyer',
  story:'NULLBYTE hides duplicates in the data stream. Destroy them with sets!',
  badge:'output', badgeClass:'tb-output',
  hint:'Sets automatically remove duplicates.',
  code:'data = [1, 2, 2, 3, 3, 3, 4]\nunique = set(data)\nprint(len(unique))',
  ans:'4', pts:90,
  explain:'set([1,2,2,3,3,3,4]) removes duplicates → {1,2,3,4} → length = 4',
  meme:'"Set la duplicate varadhu — like NULLBYTE cannot have duplicate failures! 😎"' },

{ id:16, world:1, type:'mcq',
  title:'LAMBDA LOCK — Quick Function',
  story:'The quick-function lock needs a lambda key. Which syntax is correct?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Lambda syntax: lambda parameters: expression',
  question:'Which correctly creates a lambda that doubles a number?',
  opts:['lambda x => x*2','lambda x: x*2','def lambda(x): x*2','lambda(x): return x*2'],
  ans:1, pts:95,
  explain:'Lambda syntax: "lambda x: x*2" — no def, no return, no braces. Pure Python!',
  meme:'"Lambda syntax wrong pachi, functional programming dream gone 😢"' },

{ id:17, world:1, type:'mcq',
  title:'COMPARISON BUG — = vs ==',
  story:'Someone used = instead of == in the condition. NULLBYTE\'s oldest trick!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'= is assignment, == is comparison. Classic Python gotcha!',
  question:'Find the bug:\n\nx = 5\nif x = 5:\n    print("Match!")',
  opts:['if x = 5  →  if x == 5','if x = 5  →  if x is 5','x = 5  →  x == 5','No bug'],
  ans:0, pts:95,
  explain:'"=" is assignment, "==" is comparison. Python raises SyntaxError for "if x = 5".',
  meme:'"= vs == confusion — even senior devs do this at 2am! 🌙😂"' },

{ id:18, world:1, type:'output',
  title:'ENUMERATE ENGINE — Index Tracker',
  story:'Track every data packet with its position using enumerate!',
  badge:'output', badgeClass:'tb-output',
  hint:'enumerate(list) gives (index, value) pairs starting at 0.',
  code:"items = ['a', 'b', 'c']\nfor i, v in enumerate(items):\n    if i == 1:\n        print(v)",
  ans:'b', pts:100,
  explain:'enumerate gives (0,"a"),(1,"b"),(2,"c"). When i==1, v="b" → prints "b"',
  meme:'"Enumerate miss panna, loop la manual counter vachu kudupeenga — amateur! 😤"' },

{ id:19, world:1, type:'mcq',
  title:'DICT DEFENSE — Safe Key Access',
  story:'Access the right key from NULLBYTE\'s leaked config file safely!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Use .get() to safely access dict values — avoids KeyError.',
  question:'What does this print?\n\nconfig = {"port": 8080}\nprint(config.get("host", "localhost"))',
  opts:['KeyError','None','localhost','8080'],
  ans:2, pts:100,
  explain:'.get(key, default) returns default if key missing. "host" not in config → "localhost".',
  meme:'"KeyError la crash aaiduma? .get() use panna elegant hacker aaveenga! 😎"' },

{ id:20, world:1, type:'output',
  title:'⚡ WORLD BOSS — List Comprehension',
  story:'WORLD 1 BOSS! Use list comprehension to strike down NULLBYTE\'s shield!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'List comprehension: [expression for item in iterable if condition]',
  code:'nums = [1,2,3,4,5,6,7,8,9,10]\nresult = [x**2 for x in nums if x % 2 == 0]\nprint(sum(result))',
  ans:'220', pts:150,
  explain:'Even numbers: 2,4,6,8,10 → squares: 4,16,36,64,100 → sum = 220. World 1 boss defeated!',
  meme:'"WORLD 1 COMPLETE! Nee semma hacker da! NULLBYTE outer wall DOWN! 🔥"' },

// ═══ WORLD 2 (21-40) ═══
{ id:21, world:2, type:'mcq',
  title:'BRANCH LOGIC — Elif Chain',
  story:'World 2 begins. The Decision Engine controls NULLBYTE\'s choices. Override it!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'elif is checked only if the previous if/elif was False.',
  question:'What prints?\n\nx = 15\nif x > 20:\n    print("A")\nelif x > 10:\n    print("B")\nelif x > 5:\n    print("C")\nelse:\n    print("D")',
  opts:['A','B','C','D'],
  ans:1, pts:90,
  explain:'x=15. x>20? No. x>10? Yes (15>10) → prints "B". Rest are skipped.',
  meme:'"Elif chain la trap aagideenga? NULLBYTE\'s favorite 😈"' },

{ id:22, world:2, type:'output',
  title:'NONE CHECK — Null Detector',
  story:'NULLBYTE hides in None values. Detect and neutralize!',
  badge:'output', badgeClass:'tb-output',
  hint:'"is None" checks for None identity.',
  code:'x = None\nif x is None:\n    print("NULLBYTE detected!")\nelse:\n    print("Clean")',
  ans:'NULLBYTE detected!', pts:85,
  explain:'x is None is True → prints "NULLBYTE detected!". "is" checks identity.',
  meme:'"None check miss panna, NULLBYTE silently corrupts everything! 👻"' },

{ id:23, world:2, type:'mcq',
  title:'SHORT CIRCUIT — Or Logic',
  story:'A logic bomb is ticking. Short-circuit evaluation will defuse it!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'"or" returns the first truthy value it finds.',
  question:'What does this print?\n\nname = "" or "PYRO" or "AGENT"\nprint(name)',
  opts:['""','PYRO','AGENT','False'],
  ans:1, pts:95,
  explain:'"" is falsy → skip. "PYRO" is truthy → or short-circuits, returns "PYRO".',
  meme:'"Short circuit logic! Python la or enna pannudu theriyuma? 🔥"' },

{ id:24, world:2, type:'fill',
  title:'RANGE GATE — Chained Comparison',
  story:'The range gate only opens for values 1–100. Fill the chain!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'Python allows chaining: 1 <= x <= 100 (reads like math!)',
  template:'x = 50\nif 1 ___ x ___ 100:\n    print("Valid range")',
  blanks:['<=','<='], ans:['<=','<='], pts:90,
  explain:'Python supports chained comparisons: 1 <= x <= 100 checks both bounds.',
  meme:'"Chained comparison miss panna 2 if conditions type pannuveenga — amateur! 😂"' },

{ id:25, world:2, type:'mcq',
  title:'WALRUS TRAP — Assignment Expression',
  story:'NULLBYTE used the walrus operator to hide values. Predict the output!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Walrus operator := assigns AND evaluates in one expression.',
  question:'What does this print?\n\nif (n := 10) > 5:\n    print(n * 2)',
  opts:['10','20','True','Error'],
  ans:1, pts:100,
  explain:':= assigns 10 to n AND uses it in condition. n>5 True → prints n*2 = 20.',
  meme:'"Walrus operator := — looks like a walrus, works like magic! 🦭"' },

{ id:26, world:2, type:'output',
  title:'MATCH COMMAND — Pattern Protocol',
  story:'Override the pattern protocol with the correct match result!',
  badge:'output', badgeClass:'tb-output',
  hint:'match/case is Python 3.10+. Works like switch-case.',
  code:'status = 404\nmatch status:\n    case 200:\n        print("OK")\n    case 404:\n        print("NOT FOUND")\n    case _:\n        print("UNKNOWN")',
  ans:'NOT FOUND', pts:100,
  explain:'match checks status=404. case 404 matches → "NOT FOUND". case _ is wildcard.',
  meme:'"Match statement Python 3.10 feature — NULLBYTE didn\'t know Python updated! 😂"' },

{ id:27, world:2, type:'mcq',
  title:'TRUTHINESS TEST — Falsy Values',
  story:'NULLBYTE disguises itself as falsy values! Identify the truthy impostor!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Falsy values: None, 0, "", [], {}, set(), False',
  question:'Which of these is TRUTHY in Python?',
  opts:['[]','0','" " (one space)','""'],
  ans:2, pts:95,
  explain:'" " (a space) is truthy! Empty string "" is falsy, but a string with even one space is truthy.',
  meme:'"Space wala string truthy hai! NULLBYTE hides in whitespace! 👻"' },

{ id:28, world:2, type:'mcq',
  title:'EXCEPTION ESCAPE — Try/Except',
  story:'NULLBYTE is crashing the system with exceptions! Fix the handler!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'ZeroDivisionError is raised when dividing by zero.',
  question:'What is the output?\n\ntry:\n    x = 10 / 0\nexcept ValueError:\n    print("Value Error")\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")\nfinally:\n    print("Done")',
  opts:['Value Error\nDone','Cannot divide by zero\nDone','Crash — unhandled','Done only'],
  ans:1, pts:100,
  explain:'10/0 raises ZeroDivisionError. Correct except catches it. finally ALWAYS runs.',
  meme:'"Try-except la wrong exception catch panna, error pass through aagum! 💥"' },

{ id:29, world:2, type:'output',
  title:'ANY/ALL ARSENAL — Bulk Logic',
  story:'Check if ANY system is online, or if ALL systems are offline!',
  badge:'output', badgeClass:'tb-output',
  hint:'any() = True if at least one truthy. all() = True only if all truthy.',
  code:'systems = [False, False, True, False]\nprint(any(systems))\nprint(all(systems))',
  ans:'True\nFalse', pts:95,
  explain:'any([F,F,T,F])=True (at least one True). all([F,F,T,F])=False (not all True).',
  meme:'"any() vs all() — oru system ON iruntha any() saves the day! 🔦"' },

{ id:30, world:2, type:'mcq',
  title:'NESTED IF NEXUS — Deep Condition',
  story:'Nested conditions inside NULLBYTE\'s decision matrix. Navigate carefully!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Execute nested ifs from outside in.',
  question:'What prints?\n\nx = 10; y = 20\nif x < 15:\n    if y > 15:\n        print("DEEP HIT")\n    else:\n        print("MISS")\nelse:\n    print("OUTER MISS")',
  opts:['OUTER MISS','MISS','DEEP HIT','Error'],
  ans:2, pts:90,
  explain:'x<15 True → enter. y>15 True → print "DEEP HIT".',
  meme:'"Nested if — matryoshka doll of conditions! 🪆"' },

{ id:31, world:2, type:'fill',
  title:'DEFAULT ARGS — Parameter Fortress',
  story:'The parameter fortress needs default values. Fill them in!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'Default parameter: def func(x, y=10) — y defaults to 10 if not provided.',
  template:'def connect(host, port___8080):\n    return f"{host}:{port}"\nprint(connect("localhost"))',
  blanks:['='], ans:['='], pts:85,
  explain:'Default parameters use = in definition. connect("localhost") uses port=8080 by default.',
  meme:'"Default args = safety net. Without it, missing arg = crashed mission! 🛡️"' },

{ id:32, world:2, type:'output',
  title:'ARGS ARTILLERY — *args Unpacking',
  story:'Unpack the *args artillery. How many shells fired?',
  badge:'output', badgeClass:'tb-output',
  hint:'*args collects all positional arguments into a tuple.',
  code:'def fire(*shots):\n    return sum(shots)\n\nresult = fire(10, 20, 30, 40)\nprint(result)',
  ans:'100', pts:95,
  explain:'*shots captures (10,20,30,40). sum((10,20,30,40)) = 100.',
  meme:'"*args — infinitely flexible function! NULLBYTE could not predict this! 🎯"' },

{ id:33, world:2, type:'mcq',
  title:'KWARGS KEY — Keyword Weapon',
  story:'**kwargs holds NULLBYTE\'s secret config. What does it return?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'**kwargs collects keyword arguments into a dictionary.',
  question:'What does this print?\n\ndef hack(**params):\n    return len(params)\n\nprint(hack(a=1, b=2, c=3))',
  opts:["{'a':1,'b':2,'c':3}",'3','(1,2,3)','Error'],
  ans:1, pts:95,
  explain:'**params = {"a":1,"b":2,"c":3}. len(dict) = 3.',
  meme:'"**kwargs — keyword collector. Dictionary forma change aagum! 📚"' },

{ id:34, world:2, type:'mcq',
  title:'RECURSION RESCUE — Base Case',
  story:'The recursive function has no base case — it will crash! Find the fix!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'Every recursive function needs a base case to stop infinite recursion.',
  question:'This is broken. Which fix adds the correct base case?\n\ndef countdown(n):\n    print(n)\n    countdown(n-1)',
  opts:['Add: if n == 0: return at top','Add: if n < 0: return before countdown(n-1)','Both A and B work','Add while loop'],
  ans:1, pts:100,
  explain:'if n < 0: return stops recursion before going negative. Prevents RecursionError!',
  meme:'"No base case = infinite loop = RecursionError = NULLBYTE wins! 💀"' },

{ id:35, world:2, type:'output',
  title:'CLOSURE CRACK — Inner Function',
  story:'Crack the closure — what does the inner function capture?',
  badge:'output', badgeClass:'tb-output',
  hint:'Closures capture variables from the enclosing scope.',
  code:'def multiplier(n):\n    def inner(x):\n        return x * n\n    return inner\n\ndouble = multiplier(2)\nprint(double(5))',
  ans:'10', pts:110,
  explain:'multiplier(2) returns inner with n=2 captured. double(5) → 5*2 = 10.',
  meme:'"Closure! Function returns function! Inception-level Python! 🤯"' },

{ id:36, world:2, type:'mcq',
  title:'DECORATOR DOOR — Function Wrapper',
  story:'The decorator door wraps functions. What is a decorator?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Decorators wrap functions, adding behavior before/after.',
  question:'What is a Python decorator?',
  opts:['A CSS-style effect','A function that wraps another function','A class inheritance tool','A debug keyword'],
  ans:1, pts:100,
  explain:'Decorators take a function and return a modified function. @dec is sugar for func = dec(func).',
  meme:'"@decorator — wrapping functions like gift wrap! 🎁"' },

{ id:37, world:2, type:'output',
  title:'GENERATOR GATE — Lazy Evaluation',
  story:'Generators save memory. What does this lazy evaluator produce?',
  badge:'output', badgeClass:'tb-output',
  hint:'yield produces one value at a time. next() gets the next yielded value.',
  code:'def counter():\n    yield 1\n    yield 2\n    yield 3\n\ng = counter()\nprint(next(g))\nprint(next(g))',
  ans:'1\n2', pts:110,
  explain:'yield pauses execution. next(g) resumes. First call → 1, second → 2.',
  meme:'"Generator — lazy but efficient! Like the coder who does minimum work perfectly! 😂"' },

{ id:38, world:2, type:'mcq',
  title:'MAP MISSION — Functional Strike',
  story:'Use map() to transform the data array. What is the result?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'map(function, iterable) applies function to each element.',
  question:'What does list(map(str, [1, 2, 3])) return?',
  opts:['[1, 2, 3]',  "['1', '2', '3']", '"123"','map object'],
  ans:1, pts:95,
  explain:'map(str, [1,2,3]) applies str() to each. list() converts → ["1","2","3"].',
  meme:'"map() + list() = functional programming like a pro! 🗺️"' },

{ id:39, world:2, type:'fill',
  title:'FILTER FIELD — Data Screening',
  story:'Filter out NULLBYTE\'s corrupt data points (odd numbers)!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'filter(function, iterable) keeps elements where function returns True.',
  template:'nums = [1,2,3,4,5,6]\nevens = list(filter(___ x: x % 2 == 0, nums))\nprint(evens)',
  blanks:['lambda'], ans:['lambda'], pts:95,
  explain:'filter() with lambda x: x%2==0 keeps even numbers. Result: [2,4,6]',
  meme:'"filter() + lambda = data cleaning like a boss! 🧹"' },

{ id:40, world:2, type:'output',
  title:'⚡ WORLD BOSS — Reduce Engine',
  story:'WORLD 2 BOSS! Use reduce to collapse NULLBYTE\'s decision tree!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'reduce(func, list) applies func cumulatively.',
  code:'from functools import reduce\nnums = [1, 2, 3, 4, 5]\nresult = reduce(lambda x, y: x * y, nums)\nprint(result)',
  ans:'120', pts:150,
  explain:'reduce: 1*2=2, 2*3=6, 6*4=24, 24*5=120. Factorial of 5! World 2 obliterated!',
  meme:'"WORLD 2 DOWN! Decision Engine overloaded! NULLBYTE: Impossible! 🔥🔥"' },

// ═══ WORLD 3 (41-60) ═══
{ id:41, world:3, type:'output',
  title:'WHILE MAZE — Decrement Loop',
  story:'The Loop Labyrinth begins. Navigate the while-loop maze!',
  badge:'output', badgeClass:'tb-output',
  hint:'Track variable changes carefully through each iteration.',
  code:'x = 5\ncount = 0\nwhile x > 0:\n    x -= 2\n    count += 1\nprint(count, x)',
  ans:'3 -1', pts:95,
  explain:'x: 5→3→1→-1. count increments 3 times. After 3rd iter x=-1 which fails x>0.',
  meme:'"While loop trace pannama answer solla? Sherlock style track pannu! 🔍"' },

{ id:42, world:3, type:'mcq',
  title:'BREAK BEAM — Loop Exit',
  story:'The BREAK signal will escape the loop. When does it fire?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'break immediately exits the innermost loop.',
  question:'What prints?\n\nfor i in range(10):\n    if i == 3:\n        break\n    print(i)',
  opts:['0 1 2 3','0 1 2','3','1 2 3'],
  ans:1, pts:85,
  explain:'Prints 0, 1, 2. When i==3, break fires BEFORE print(3). Loop exits.',
  meme:'"break statement — emergency exit! Fire alarm of loops! 🚨"' },

{ id:43, world:3, type:'output',
  title:'CONTINUE CORRIDOR — Skip Protocol',
  story:'Skip corrupt data packets using continue!',
  badge:'output', badgeClass:'tb-output',
  hint:'continue skips rest of loop body, goes to next iteration.',
  code:'total = 0\nfor i in range(1, 6):\n    if i % 2 == 0:\n        continue\n    total += i\nprint(total)',
  ans:'9', pts:90,
  explain:'Skips even numbers (2,4). Adds odd: 1+3+5=9.',
  meme:'"continue — skip bad data, process only good! 🏃"' },

{ id:44, world:3, type:'fill',
  title:'NESTED LOOP NET — Iteration Count',
  story:'NULLBYTE\'s nets are nested loops. How many iterations total?',
  badge:'fill', badgeClass:'tb-fill',
  hint:'Nested loops: outer × inner iterations total.',
  template:'count = 0\nfor i in range(___):  # 3 times\n    for j in range(4):  # 4 times\n        count += 1\nprint(count)  # Should print 12',
  blanks:['3'], ans:['3'], pts:85,
  explain:'3 outer × 4 inner = 12 total iterations.',
  meme:'"Nested loops = O(n²) complexity. NULLBYTE ka time complexity kharab hai! 😂"' },

{ id:45, world:3, type:'output',
  title:'PATTERN PRINTER — Star Matrix',
  story:'Print NULLBYTE\'s weakness pattern. Analyze the output!',
  badge:'output', badgeClass:'tb-output',
  hint:'"*" * i repeats the star i times. Default print adds newline.',
  code:"for i in range(1, 4):\n    print('*' * i)",
  ans:'*\n**\n***', pts:90,
  explain:'i=1:"*", i=2:"**", i=3:"***". Each on new line.',
  meme:'"Star pattern! Classic coding interview trap! NULLBYTE uses this in tech interviews! 😂"' },

{ id:46, world:3, type:'mcq',
  title:'ZIP ZONE — Parallel Iteration',
  story:'Zip two data streams together for parallel processing!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'zip() stops at the shortest iterable.',
  question:"What does list(zip([1,2,3], ['a','b'])) return?",
  opts:["[(1,'a'),(2,'b'),(3,None)]","[(1,'a'),(2,'b')]","[1,'a',2,'b']",'Error'],
  ans:1, pts:95,
  explain:'zip stops at shortest. [1,2,3] has 3, ["a","b"] has 2 → result has 2 pairs.',
  meme:'"zip() stops at shortest! Like a team that waits for the slowest member 🐢"' },

{ id:47, world:3, type:'output',
  title:'FIBONACCI FORTRESS — Sequence',
  story:'The Fibonacci sequence is the encryption key. Calculate it!',
  badge:'output', badgeClass:'tb-output',
  hint:'Fibonacci: each number = sum of previous two. 0,1,1,2,3,5...',
  code:'a, b = 0, 1\nfor _ in range(5):\n    a, b = b, a + b\nprint(a)',
  ans:'5', pts:110,
  explain:'After 5 iters: (0,1)→(1,1)→(1,2)→(2,3)→(3,5). a=5. That is fib(5)!',
  meme:'"Fibonacci! Nature sequence. NULLBYTE uses golden ratio for encryption! 🌀"' },

{ id:48, world:3, type:'mcq',
  title:'INFINITE ESCAPE — Fix Infinite Loop',
  story:'NULLBYTE created an infinite loop! Find the exit!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'The condition must eventually become False.',
  question:'What is wrong?\n\nn = 1\nwhile n > 0:\n    n += 1\n    print(n)',
  opts:['n starts wrong','n should decrease (n -= 1)','Missing break','print outside'],
  ans:1, pts:100,
  explain:'n keeps increasing. n>0 is always True → infinite loop. Fix: n -= 1.',
  meme:'"Infinite loop! CPU fan going brrrrr! 🔥💻 System crash incoming!"' },

{ id:49, world:3, type:'output',
  title:'GENERATOR LASER — Next Values',
  story:'Generators are lazy. What does this produce?',
  badge:'output', badgeClass:'tb-output',
  hint:'() creates generator. [] creates list. next() pulls one value.',
  code:'gen = (x**2 for x in range(4))\nprint(next(gen))\nprint(next(gen))',
  ans:'0\n1', pts:100,
  explain:'Generator expression. next() pulls: 0²=0, then 1²=1.',
  meme:'"Generator — oru oru value thaa therum! 😂"' },

{ id:50, world:3, type:'mcq',
  title:'SORT SEQUENCE — Custom Key',
  story:'Sort NULLBYTE\'s data by a custom key for maximum efficiency!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'sorted(list, key=func) sorts by the return value of func.',
  question:"To sort ['banana','apple','kiwi'] by string length, use:",
  opts:['sorted(fruits)','sorted(fruits, key=len)','fruits.sort(length)','sorted(fruits, len)'],
  ans:1, pts:95,
  explain:'sorted(fruits, key=len) sorts by length: kiwi(4), apple(5), banana(6).',
  meme:'"key=len! Oru line la custom sort! Python shortcuts adichiya! 🚀"' },

{ id:51, world:3, type:'output',
  title:'DICT COMPREHENSION — Data Transform',
  story:'Transform raw data into a mapped structure!',
  badge:'output', badgeClass:'tb-output',
  hint:'Dict comprehension: {key: value for item in iterable if condition}',
  code:'nums = [1, 2, 3, 4]\nsquared = {x: x**2 for x in nums if x % 2 == 0}\nprint(squared)',
  ans:'{2: 4, 4: 16}', pts:105,
  explain:'Filters evens (2,4), squares them. {2:4, 4:16}.',
  meme:'"Dict comprehension! JSON in one line! Backend devs ki nind nahi aayegi! 😂"' },

{ id:52, world:3, type:'fill',
  title:'WHILE ELSE — Bonus Protocol',
  story:'Python\'s secret weapon: while-else! Fill in the else trigger!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'while-else: the else block runs when loop ends normally (no break).',
  template:'n = 10\nwhile n > 0:\n    n -= 3\n___ :\n    print("Exhausted")',
  blanks:['else'], ans:['else'], pts:100,
  explain:'while-else: else runs when loop ends normally. Prints "Exhausted" when n<=0.',
  meme:'"while-else! Python hidden feature! 99% of devs don\'t know this! 🤫"' },

{ id:53, world:3, type:'output',
  title:'STRING LOOP — Character Count',
  story:'Scan each character in NULLBYTE\'s signature for the letter L!',
  badge:'output', badgeClass:'tb-output',
  hint:'Strings are iterable — loop over each character.',
  code:'s = "NULLBYTE"\ncount = sum(1 for c in s if c == "L")\nprint(count)',
  ans:'2', pts:90,
  explain:'"NULLBYTE" has L at index 2 and 3. Generator counts them: 2.',
  meme:'"String iteration! Letter count panna generator use pannalaam! 🔤"' },

{ id:54, world:3, type:'mcq',
  title:'ITER CHAIN — Combine Streams',
  story:'Chain multiple data streams together with itertools!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'itertools.chain() joins multiple iterables into one sequence.',
  question:'What does list(chain([1,2], [3,4], [5])) produce?',
  opts:['[[1,2],[3,4],[5]]','[1,2,3,4,5]','(1,2,3,4,5)','Error'],
  ans:1, pts:100,
  explain:'itertools.chain joins iterables into one flat sequence: [1,2,3,4,5].',
  meme:'"itertools.chain — oru lama row la array join! No extend needed! 🔗"' },

{ id:55, world:3, type:'output',
  title:'MATRIX MAKER — 2D Comprehension',
  story:'Build the targeting matrix using nested list comprehension!',
  badge:'output', badgeClass:'tb-output',
  hint:'Nested list comprehension creates 2D structures.',
  code:'matrix = [[i*j for j in range(1,3)] for i in range(1,3)]\nprint(matrix[1][1])',
  ans:'4', pts:110,
  explain:'matrix = [[1,2],[2,4]]. matrix[1][1] → row 1, col 1 → 2*2 = 4.',
  meme:'"2D matrix! Data science start ho gayi! NumPy ka bhai! 📊"' },

{ id:56, world:3, type:'mcq',
  title:'LOOP LEAK — Scope Gotcha',
  story:'The loop variable is leaking outside! Track the final value!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'In Python, for-loop variable PERSISTS after the loop ends!',
  question:'What prints AFTER the loop?\n\nfor i in range(5):\n    pass\nprint(i)',
  opts:['NameError','4','5','None'],
  ans:1, pts:95,
  explain:'Python for-loop variables persist! i = 4 (last value of range(5)). This is a gotcha!',
  meme:'"Loop variable leaks in Python! JavaScript devs screaming "let"! 😱"' },

{ id:57, world:3, type:'fill',
  title:'ACCUMULATE ATTACK — Running Total',
  story:'Calculate the running total of NULLBYTE\'s corrupted byte stream!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'itertools.accumulate() gives running totals: [1,3,6,10...]',
  template:'from itertools import accumulate\ndata = [1, 2, 3, 4]\nresult = list(accumulate(data))\nprint(result[___])  # Last element = total sum',
  blanks:['-1'], ans:['-1'], pts:100,
  explain:'accumulate([1,2,3,4]) = [1,3,6,10]. result[-1] = 10 = total sum.',
  meme:'"result[-1] = last element! Negative indexing = Python superpower! 💪"' },

{ id:58, world:3, type:'output',
  title:'PRODUCT PROBE — Combinations',
  story:'Generate all attack combinations using Cartesian product!',
  badge:'output', badgeClass:'tb-output',
  hint:'itertools.product(A, B) gives all combinations. Count = len(A) × len(B).',
  code:"from itertools import product\nresult = list(product([1,2], ['a','b']))\nprint(len(result))",
  ans:'4', pts:100,
  explain:'product([1,2],["a","b"]) = (1,"a"),(1,"b"),(2,"a"),(2,"b") = 4 combos. 2×2=4.',
  meme:'"Cartesian product! Combination attack! NULLBYTE has 4 escape routes! 🎯"' },

{ id:59, world:3, type:'mcq',
  title:'DEQUE DEFENSE — Double Queue',
  story:'Use deque for O(1) operations at both ends!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'deque allows O(1) append/pop from both ends.',
  question:'Why use collections.deque instead of a list for a queue?',
  opts:["Lists don't support queues","deque.appendleft() and popleft() are O(1) vs O(n) for list","deque faster for indexing","deque uses less memory"],
  ans:1, pts:105,
  explain:'list.insert(0,x) is O(n). deque.appendleft(x) is O(1). Dramatically faster for queues.',
  meme:'"deque vs list — O(1) vs O(n)! Performance matters! ⚡"' },

{ id:60, world:3, type:'output',
  title:'⚡ WORLD BOSS — Prime Shield',
  story:'WORLD 3 BOSS! Calculate NULLBYTE\'s prime number shield!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'A prime has no divisors other than 1 and itself.',
  code:'def is_prime(n):\n    if n < 2: return False\n    for i in range(2, int(n**0.5)+1):\n        if n % i == 0: return False\n    return True\n\nprimes = [x for x in range(1,20) if is_prime(x)]\nprint(len(primes))',
  ans:'8', pts:150,
  explain:'Primes 1-19: 2,3,5,7,11,13,17,19 = 8 primes. Loop Labyrinth destroyed!',
  meme:'"WORLD 3 DONE! Prime check! Math + Code = POWER! NULLBYTE shield DOWN! 💥"' },

// ═══ WORLD 4 (61-80) ═══
{ id:61, world:4, type:'output',
  title:'STRING SURGERY — Reverse Decrypt',
  story:'NULLBYTE encrypted data in reverse strings. Decrypt it!',
  badge:'output', badgeClass:'tb-output',
  hint:'String slicing with step -1 reverses: s[::-1]',
  code:'cipher = "ETYBLUN"\nprint(cipher[::-1])',
  ans:'NULLBYTE', pts:90,
  explain:'s[::-1] reverses the string. "ETYBLUN" reversed = "NULLBYTE"!',
  meme:'"Reverse string = [::-1]! One slice to rule them all! 🗡️"' },

{ id:62, world:4, type:'mcq',
  title:'SORT ALGORITHM — Timsort',
  story:'Choose the right algorithm for maximum efficiency!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Python built-in sort uses Timsort — O(n log n).',
  question:"Python's sorted() function uses which algorithm?",
  opts:['QuickSort','BubbleSort','Timsort','MergeSort'],
  ans:2, pts:100,
  explain:'Python uses Timsort — hybrid of MergeSort and InsertionSort. O(n log n) worst case.',
  meme:'"Timsort! Named after Tim Peters! Python secret weapon! 🏆"' },

{ id:63, world:4, type:'output',
  title:'BINARY SEARCH — Fast Target Lock',
  story:'Lock onto NULLBYTE\'s position using binary search!',
  badge:'output', badgeClass:'tb-output',
  hint:'Binary search halves the search space each time.',
  code:'def binary_search(arr, target):\n    lo, hi = 0, len(arr)-1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if arr[mid] == target: return mid\n        elif arr[mid] < target: lo = mid + 1\n        else: hi = mid - 1\n    return -1\n\nprint(binary_search([1,3,5,7,9,11], 7))',
  ans:'3', pts:120,
  explain:'mid=2(5<7)→lo=3, mid=4(9>7)→hi=3, mid=3(7==7)→return 3.',
  meme:'"Binary search — O(log n)! Finding NULLBYTE in log time! 🎯"' },

{ id:64, world:4, type:'fill',
  title:'STRING METHODS — Strip and Split',
  story:'Clean NULLBYTE\'s dirty data strings!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'.strip() removes whitespace. .split() splits by spaces.',
  template:'raw = "  hello world  "\nclean = raw.___().split()\nprint(clean)',
  blanks:['strip'], ans:['strip'], pts:85,
  explain:'.strip() removes leading/trailing whitespace. .split() splits → ["hello","world"].',
  meme:'"strip() then split()! Data cleaning 101! No dirty strings pass! 🧹"' },

{ id:65, world:4, type:'output',
  title:'STACK ATTACK — LIFO Strategy',
  story:'Use a stack (LIFO) to reverse NULLBYTE\'s attack sequence!',
  badge:'output', badgeClass:'tb-output',
  hint:'Stack uses append() to push, pop() to remove from top.',
  code:'stack = []\nfor x in [3, 1, 4, 1, 5]:\n    stack.append(x)\n\nresult = []\nfor _ in range(3):\n    result.append(stack.pop())\nprint(result)',
  ans:'[5, 1, 4]', pts:105,
  explain:'Stack: [3,1,4,1,5]. Pop 3 times (LIFO): 5,1,4 → result [5,1,4].',
  meme:'"Stack — Last In First Out! Like eating Pringles! 🥫"' },

{ id:66, world:4, type:'mcq',
  title:'HASH MAP — O(1) Lookup',
  story:'NULLBYTE needs O(1) lookup. Only one data structure works!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Python dict uses hash table → O(1) average lookup.',
  question:'What is the average time complexity for dict.get(key) in Python?',
  opts:['O(n)','O(log n)','O(1)','O(n²)'],
  ans:2, pts:100,
  explain:'Python dicts are hash maps. Hash computation → direct memory access = O(1) average.',
  meme:'"O(1) lookup! Dictionary is a hash map! Every coder best friend! 🗺️"' },

{ id:67, world:4, type:'output',
  title:'PALINDROME PROBE — Mirror Data',
  story:'NULLBYTE hides in palindromes. Detect the mirror!',
  badge:'output', badgeClass:'tb-output',
  hint:'A palindrome reads the same forwards and backwards.',
  code:'def is_palindrome(s):\n    s = s.lower()\n    return s == s[::-1]\n\nprint(is_palindrome("RACECAR"))\nprint(is_palindrome("PYTHON"))',
  ans:'True\nFalse', pts:95,
  explain:'"racecar"[::-1]="racecar" → True. "python"[::-1]="nohtyp" → False.',
  meme:'"Palindrome check in one line! s == s[::-1] is Python magic! 🪄"' },

{ id:68, world:4, type:'mcq',
  title:'MUTABLE DEFAULT — Dangerous Trap',
  story:'NULLBYTE planted the most dangerous Python trap — mutable defaults!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'Never use mutable defaults like [] — they persist across calls!',
  question:'What is the output of calling add_item twice?\n\ndef add_item(item, lst=[]):\n    lst.append(item)\n    return lst\n\nprint(add_item(1))\nprint(add_item(2))',
  opts:['[1] then [2]','[1] then [1, 2]','Error','[1] then []'],
  ans:1, pts:110,
  explain:'Mutable default created ONCE and shared across calls! add_item(1)=[1], add_item(2)=[1,2]!',
  meme:'"Mutable default trap! Senior devs nightmare! NULLBYTE master trick! 😱"' },

{ id:69, world:4, type:'output',
  title:'COUNTER STRIKE — Frequency',
  story:'Analyze NULLBYTE\'s signal frequency using Counter!',
  badge:'output', badgeClass:'tb-output',
  hint:'Counter counts element frequencies.',
  code:'from collections import Counter\nsignal = "ATTACK"\nc = Counter(signal)\nprint(c["T"])',
  ans:'2', pts:100,
  explain:'Counter("ATTACK") = {"A":2,"T":2,"C":1,"K":1}. c["T"] = 2.',
  meme:'"Counter! Frequency analysis without a loop! Python doing work for you! 🔢"' },

{ id:70, world:4, type:'mcq',
  title:'COPY CRISIS — Deep vs Shallow',
  story:'NULLBYTE modified the copy — but the original changed too! Why?',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Shallow copy copies references. Deep copy copies all nested objects.',
  question:'import copy; a=[[1,2],[3,4]]; b=copy.copy(a); b[0][0]=99; what is a[0][0]?',
  opts:['1 — original unchanged','99 — original changed','Error','None'],
  ans:1, pts:110,
  explain:'Shallow copy copies outer list but NOT inner lists. b[0] and a[0] point to same inner list!',
  meme:'"Shallow copy trap! Use copy.deepcopy() for full independence! 🕳️"' },

{ id:71, world:4, type:'fill',
  title:'REGEX RAID — Pattern Match',
  story:'Use regex to extract NULLBYTE\'s hidden coordinates!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'re.findall(pattern, string) returns all matches as a list.',
  template:'import re\ntext = "Send troops to X:42 and Y:88"\nnumbers = re.findall(r\'\\d+\', text)\nprint(___)',
  blanks:['numbers'], ans:['numbers'], pts:100,
  explain:'re.findall finds all digit sequences: ["42","88"]. print(numbers) shows the list.',
  meme:'"Regex! The programming language within programming! 🧩"' },

{ id:72, world:4, type:'output',
  title:'DEFAULTDICT DEFENSE — Safe Access',
  story:'NULLBYTE is triggering KeyErrors! Use defaultdict as a shield!',
  badge:'output', badgeClass:'tb-output',
  hint:'defaultdict(int) returns 0 for missing keys automatically.',
  code:'from collections import defaultdict\nd = defaultdict(int)\nd["hits"] += 1\nd["hits"] += 1\nd["misses"] += 1\nprint(dict(d))',
  ans:"{'hits': 2, 'misses': 1}", pts:105,
  explain:'defaultdict(int) starts every new key at 0. hits+=1 twice=2, misses+=1=1.',
  meme:'"defaultdict! No more KeyError! Python safety net! 😎"' },

{ id:73, world:4, type:'mcq',
  title:'NAMED TUPLE — Structured Data',
  story:'Structure NULLBYTE\'s agent profile as a namedtuple!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'namedtuple creates tuple subclasses with named fields.',
  question:'What is the advantage of namedtuple over a regular tuple?',
  opts:['It is mutable','Access by name (agent.name) instead of index (agent[0])','It uses less memory','It is faster to iterate'],
  ans:1, pts:100,
  explain:'namedtuple allows agent.name instead of agent[0]. More readable, same memory as tuple.',
  meme:'"namedtuple — readability++! agent.name > agent[0] any day! 📛"' },

{ id:74, world:4, type:'output',
  title:'HEAP HACK — Priority Queue',
  story:'Process NULLBYTE\'s attacks by priority using a min-heap!',
  badge:'output', badgeClass:'tb-output',
  hint:'heapq is a min-heap. heappop() removes minimum element.',
  code:'import heapq\nattacks = []\nheapq.heappush(attacks, 5)\nheapq.heappush(attacks, 2)\nheapq.heappush(attacks, 8)\nprint(heapq.heappop(attacks))',
  ans:'2', pts:110,
  explain:'Min-heap gives smallest element first. heappop() → 2 (smallest of 5,2,8).',
  meme:'"heapq — min-heap! Priority queue in Python! Process smallest threat first! ⚡"' },

{ id:75, world:4, type:'fill',
  title:'DATACLASS DEPLOY — Auto Init',
  story:'Deploy the dataclass to auto-generate NULLBYTE\'s profile!',
  badge:'fill', badgeClass:'tb-fill',
  hint:'@dataclass decorator auto-generates __init__, __repr__, etc.',
  template:'from dataclasses import ___\n\n@dataclass\nclass Agent:\n    name: str\n    level: int\n\na = Agent("PYRO", 99)\nprint(a.name)',
  blanks:['dataclass'], ans:['dataclass'], pts:100,
  explain:'from dataclasses import dataclass. @dataclass auto-creates __init__ from field annotations.',
  meme:'"@dataclass — auto __init__! No boilerplate! Python 3.7+ magic! ✨"' },

{ id:76, world:4, type:'output',
  title:'NESTED COMPREHENSION — Flatten Filter',
  story:'Extract critical data using complex nested comprehension!',
  badge:'output', badgeClass:'tb-output',
  hint:'Nested list comprehension can flatten and filter simultaneously.',
  code:'data = [[1,2,3],[4,5,6],[7,8,9]]\nflat = [x for row in data for x in row if x % 3 == 0]\nprint(flat)',
  ans:'[3, 6, 9]', pts:115,
  explain:'Flattens 2D list, filters multiples of 3: 3,6,9.',
  meme:'"Nested comprehension! One line to flatten AND filter! NULLBYTE: 🤯"' },

{ id:77, world:4, type:'mcq',
  title:'OOP OVERRIDE — Polymorphism',
  story:'NULLBYTE uses polymorphism to disguise itself. Override the method!',
  badge:'mcq', badgeClass:'tb-mcq',
  hint:'Method overriding: subclass defines same method as parent.',
  question:'What is method overriding in Python OOP?',
  opts:['Adding new methods','Redefining a parent class method in a subclass','Calling multiple methods','Deleting a parent method'],
  ans:1, pts:100,
  explain:'Overriding: subclass has same method name as parent. Subclass version runs when called.',
  meme:'"Method override! Same name, different behavior! 😂"' },

{ id:78, world:4, type:'output',
  title:'PROPERTY PATROL — Getter/Setter',
  story:'Control access to NULLBYTE\'s attributes using @property!',
  badge:'output', badgeClass:'tb-output',
  hint:'@property creates a getter method accessed like an attribute.',
  code:'class System:\n    def __init__(self):\n        self._power = 0\n\n    @property\n    def power(self):\n        return self._power * 2\n\ns = System()\ns._power = 5\nprint(s.power)',
  ans:'10', pts:110,
  explain:'@property wraps _power*2. s._power=5 → s.power = 5*2 = 10.',
  meme:'"@property! Getter without calling it as a method! Pythonic! 🔒"' },

{ id:79, world:4, type:'mcq',
  title:'DUNDER DEFENSE — Magic Methods',
  story:'Fix the magic method so objects compare correctly!',
  badge:'debug', badgeClass:'tb-debug',
  hint:'__eq__ defines == behavior. It should return a boolean.',
  question:'What should __eq__ return for a1 == a2 to work?\n\nclass Agent:\n    def __init__(self, level):\n        self.level = level\n    def __eq__(self, other):\n        return self.level ___ other.level',
  opts:['is','==','>=','and'],
  ans:1, pts:110,
  explain:'__eq__ should return self.level == other.level — returns True/False for == comparison.',
  meme:'"__eq__ operator overloading! Dunder methods = Python secret language! 🔮"' },

{ id:80, world:4, type:'output',
  title:'⚡ WORLD BOSS — Merge Sort',
  story:'WORLD 4 BOSS! Run the full algorithm gauntlet — merge sorted arrays!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'Two-pointer merge: compare heads, append smaller each time.',
  code:'def merge_sorted(a, b):\n    result = []\n    i = j = 0\n    while i < len(a) and j < len(b):\n        if a[i] <= b[j]:\n            result.append(a[i]); i+=1\n        else:\n            result.append(b[j]); j+=1\n    return result + a[i:] + b[j:]\n\nprint(merge_sorted([1,3,5],[2,4,6]))',
  ans:'[1, 2, 3, 4, 5, 6]', pts:150,
  explain:'Two-pointer merge: compare heads, append smaller. [1,2,3,4,5,6]. Data Vault BREACHED!',
  meme:'"WORLD 4 DOWN! Merge Sort core! NULLBYTE data vault is OPEN! 💥💥"' },

// ═══ WORLD 5 (81-100) ═══
{ id:81, world:5, type:'output',
  title:'METACLASS MATRIX — Dynamic Class',
  story:'World 5: THE FINAL NEXUS. NULLBYTE\'s core systems activate!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'type() can create classes dynamically: type(name, bases, attrs_dict)',
  code:"MyClass = type('MyClass', (object,), {'x': 42})\nobj = MyClass()\nprint(obj.x)",
  ans:'42', pts:120,
  explain:'type() creates classes at runtime. MyClass with attribute x=42. obj.x = 42.',
  meme:'"Metaclass! Creating classes dynamically! NULLBYTE mind explodes! 🤯🤯"' },

{ id:82, world:5, type:'mcq',
  title:'ASYNC ASSAULT — Coroutines',
  story:'NULLBYTE\'s defense uses async processing. Override it!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'async/await enables non-blocking concurrent code.',
  question:'What does "await" do in an async function?',
  opts:['Makes the function synchronous','Pauses coroutine until awaited task completes','Creates a new thread','Stops entire program'],
  ans:1, pts:120,
  explain:'"await" pauses current coroutine, allows event loop to run other tasks. Resumes when done.',
  meme:'"async/await! Concurrent without threads! NULLBYTE cannot block us! ⚡"' },

{ id:83, world:5, type:'output',
  title:'DESCRIPTOR DECODE — Attribute Protocol',
  story:'Crack the descriptor protocol in NULLBYTE\'s attribute system!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'__get__ is called when accessing a descriptor attribute.',
  code:'class Power:\n    def __get__(self, obj, objtype=None):\n        return 9000\n\nclass Agent:\n    level = Power()\n\na = Agent()\nprint(a.level)',
  ans:'9000', pts:130,
  explain:'Power is a descriptor. a.level triggers Power.__get__ → returns 9000.',
  meme:'"OVER 9000! Descriptor protocol! This is DBZ coding! 😂"' },

{ id:84, world:5, type:'fill',
  title:'CONTEXT MANAGER — With Statement',
  story:'Manage NULLBYTE\'s resources safely with context managers!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'__enter__ runs on entering "with". __exit__ runs on leaving.',
  template:'class Firewall:\n    def __enter__(self):\n        print("Firewall ON")\n        return self\n    def ___exit___(self, *args):\n        print("Firewall OFF")\n\nwith Firewall():\n    print("Protected")',
  blanks:['__'], ans:['__'], pts:120,
  explain:'__exit__ (double underscores) is the dunder method called when leaving the with block.',
  meme:'"Context manager! with statement = automatic cleanup! No resource leaks! 🛡️"' },

{ id:85, world:5, type:'output',
  title:'SLOT SNIPE — Memory Optimization',
  story:'NULLBYTE uses __slots__ to optimize memory. Predict the behavior!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'__slots__ restricts attributes and saves memory by avoiding __dict__.',
  code:'class Bullet:\n    __slots__ = ["speed", "damage"]\n    def __init__(self):\n        self.speed = 1000\n        self.damage = 50\n\nb = Bullet()\ntry:\n    b.weight = 5\nexcept AttributeError:\n    print("Slot restricted!")',
  ans:'Slot restricted!', pts:120,
  explain:'__slots__ prevents adding new attributes not in the list. b.weight raises AttributeError.',
  meme:'"__slots__! No __dict__ = memory saved! Strict agent protocol! 🎯"' },

{ id:86, world:5, type:'mcq',
  title:'GIL THEORY — Thread Limit',
  story:'NULLBYTE exploits the GIL! Understand Python\'s threading weakness!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'GIL = Global Interpreter Lock.',
  question:'What is Python\'s GIL and what does it affect?',
  opts:['Global Index List — affects sorting','Global Interpreter Lock — limits true parallel threading','General Input Library — affects I/O','Grid Interface Layer'],
  ans:1, pts:120,
  explain:'GIL prevents multiple threads running Python bytecode simultaneously. Use multiprocessing for CPU-bound tasks.',
  meme:'"GIL! Python controversial design! Guido most-debated choice! 🔒"' },

{ id:87, world:5, type:'output',
  title:'LRU CACHE — Memoize Missile',
  story:'Cache NULLBYTE\'s attack patterns to neutralize repeats instantly!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'@lru_cache memoizes function results. Repeated calls return cached instantly.',
  code:'from functools import lru_cache\n\n@lru_cache(maxsize=None)\ndef fib(n):\n    if n < 2: return n\n    return fib(n-1) + fib(n-2)\n\nprint(fib(10))',
  ans:'55', pts:130,
  explain:'@lru_cache memoizes fib. fib(10) = 55. Without cache O(2^n). With cache O(n)!',
  meme:'"@lru_cache! Fibonacci in O(n)! Dynamic programming for free! 🚀"' },

{ id:88, world:5, type:'mcq',
  title:'MEMORYVIEW — Buffer Protocol',
  story:'Access the memory buffer directly to patch NULLBYTE\'s exploit!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'memoryview allows zero-copy buffer operations on bytes-like objects.',
  question:'Which data types support memoryview?',
  opts:['str and list','bytes and bytearray','int and float','dict and set'],
  ans:1, pts:115,
  explain:'memoryview works with bytes-like objects: bytes (immutable) and bytearray (mutable).',
  meme:'"memoryview! Low-level Python! System programmer mode: ON! 💻"' },

{ id:89, world:5, type:'output',
  title:'ABC PROTOCOL — Abstract Base',
  story:'Implement ABC to define NULLBYTE\'s weak interface!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'ABCMeta + @abstractmethod force subclasses to implement methods.',
  code:'from abc import ABC, abstractmethod\n\nclass Weapon(ABC):\n    @abstractmethod\n    def fire(self): pass\n\nclass Laser(Weapon):\n    def fire(self):\n        return "PEW PEW"\n\nw = Laser()\nprint(w.fire())',
  ans:'PEW PEW', pts:125,
  explain:'ABC forces subclasses to implement abstract methods. Laser implements fire() → "PEW PEW".',
  meme:'"ABC! Abstract Base Class! Contract programming! NULLBYTE must implement! 📋"' },

{ id:90, world:5, type:'mcq',
  title:'PROFILER PROBE — Performance',
  story:'Profile NULLBYTE\'s code to find the performance bottleneck!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'cProfile gives detailed function-level timing.',
  question:'Which tool gives the best detailed performance profile of Python code?',
  opts:['time.time()','timeit','cProfile','print statements'],
  ans:2, pts:115,
  explain:'cProfile gives call counts, cumulative time per function, and call relationships.',
  meme:'"cProfile! python -m cProfile script.py! Find slow code before NULLBYTE finds you! ⏱️"' },

{ id:91, world:5, type:'output',
  title:'CHAIN MAP — Layered Config',
  story:'Stack NULLBYTE\'s config layers using ChainMap!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'ChainMap layers dicts. Lookup searches first dict, then second.',
  code:"from collections import ChainMap\ndefaults = {'host':'localhost','port':80}\noverride = {'port':443}\nconfig = ChainMap(override, defaults)\nprint(config['host'], config['port'])",
  ans:'localhost 443', pts:120,
  explain:'ChainMap searches override first (port=443), then defaults (host="localhost"). Layered config!',
  meme:'"ChainMap! Config layering without dict merging! DevOps Python weapon! 🛠️"' },

{ id:92, world:5, type:'fill',
  title:'TYPED NAMEDTUPLE — Clean Code',
  story:'Combine namedtuple efficiency with type hints!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'typing.NamedTuple is the typed version of namedtuple with class syntax.',
  template:'from typing import NamedTuple\n\nclass Agent(___):\n    name: str\n    power: int\n\na = Agent("PYRO", 100)\nprint(a.power)',
  blanks:['NamedTuple'], ans:['NamedTuple'], pts:120,
  explain:'class Agent(NamedTuple) creates typed namedtuple. a.power = 100. Clean, fast, immutable!',
  meme:'"typing.NamedTuple! Type hints + namedtuple = modern Python! 🏆"' },

{ id:93, world:5, type:'output',
  title:'PARTIAL POWER — Pre-loaded Functions',
  story:'Preload partial functions to speed-attack NULLBYTE\'s defenses!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'functools.partial creates new function with some args pre-filled.',
  code:'from functools import partial\n\ndef power(base, exp):\n    return base ** exp\n\nsquare = partial(power, exp=2)\ncube = partial(power, exp=3)\n\nprint(square(4) + cube(2))',
  ans:'24', pts:125,
  explain:'square(4) = 4²=16. cube(2) = 2³=8. 16+8=24.',
  meme:'"partial()! Pre-configured functions! Curry in Python style! 🍛"' },

{ id:94, world:5, type:'mcq',
  title:'SINGLETON SHIELD — Design Pattern',
  story:'NULLBYTE can only be initialized once! Implement Singleton!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'Singleton ensures only one instance of a class exists.',
  question:'How do you implement Singleton pattern in Python?',
  opts:['Use a global variable','Override __new__ to return existing instance or create first','Use @staticmethod on all methods','Import the class twice'],
  ans:1, pts:120,
  explain:'Override __new__: if instance exists return it; else create one. Ensures single instance.',
  meme:'"Singleton! One NULLBYTE to rule them all! Design pattern activated! 👑"' },

{ id:95, world:5, type:'output',
  title:'OBSERVER OVERLOAD — Event System',
  story:'Override NULLBYTE\'s event system with the Observer pattern!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'Observer pattern: subjects notify all subscribed observers.',
  code:'class EventBus:\n    def __init__(self):\n        self.handlers = []\n    def subscribe(self, fn):\n        self.handlers.append(fn)\n    def emit(self, data):\n        for h in self.handlers:\n            h(data)\n\nbus = EventBus()\nbus.subscribe(lambda x: print(f"Alert: {x}"))\nbus.emit("NULLBYTE_DETECTED")',
  ans:'Alert: NULLBYTE_DETECTED', pts:130,
  explain:'EventBus collects handlers. emit() calls all handlers with data. Observer pattern!',
  meme:'"Event system! Observer pattern! Frontend devs: This is just addEventListener! 😂"' },

{ id:96, world:5, type:'mcq',
  title:'THREAD LOCK — Race Condition',
  story:'Threads are racing! Fix the race condition before NULLBYTE escapes!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'threading.Lock() prevents race conditions.',
  question:'What prevents a race condition in threaded Python code?',
  opts:['Using global variables','Using threading.Lock() to synchronize access','Running threads sequentially','Using print() for debugging'],
  ans:1, pts:125,
  explain:'threading.Lock() ensures only one thread modifies shared data at a time.',
  meme:'"Race condition! Two threads, one counter! Lock it before NULLBYTE exploits! 🔐"' },

{ id:97, world:5, type:'output',
  title:'STACKED DECORATORS — Multi-Wrap',
  story:'Stack 3 decorators to triple-boost the attack power!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'Multiple decorators apply bottom-up: @c @b @a def f → c(b(a(f)))',
  code:'def double(fn):\n    def w(*args):\n        return fn(*args) * 2\n    return w\n\ndef add_ten(fn):\n    def w(*args):\n        return fn(*args) + 10\n    return w\n\n@add_ten\n@double\ndef base():\n    return 5\n\nprint(base())',
  ans:'20', pts:135,
  explain:'Bottom-up: double first → 5*2=10, then add_ten → 10+10=20.',
  meme:'"Stacked decorators! Applied bottom-up! Layer by layer like an onion! 🧅"' },

{ id:98, world:5, type:'mcq',
  title:'TYPE HINTS — Static Analysis',
  story:'NULLBYTE bypassed type hints! Understand their real power!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'Type hints are for static analysis tools, not enforced at runtime.',
  question:'What does List[int] in Python type hints mean?',
  opts:['Creates list with only integers (enforced)','Annotates expected type for static analysis (NOT enforced at runtime)','Converts list elements to int','Raises TypeError for non-ints'],
  ans:1, pts:120,
  explain:'Type hints are just annotations — not enforced at runtime. mypy uses them for static analysis.',
  meme:'"Type hints! Lie detector for Python at analysis time only! Runtime cares not! 🕵️"' },

{ id:99, world:5, type:'output',
  title:'PROXY POWER — Meta Programming',
  story:'One level before the final boss. Show Python ultimate meta power!',
  badge:'boss', badgeClass:'tb-boss',
  hint:'__getattr__ is called when normal attribute lookup fails.',
  code:'class Proxy:\n    def __init__(self, target):\n        self._target = target\n    def __getattr__(self, name):\n        return getattr(self._target, name)\n\nclass Core:\n    power = 9999\n\np = Proxy(Core())\nprint(p.power)',
  ans:'9999', pts:140,
  explain:'p.power not in Proxy → __getattr__ called → getattr(Core(), "power") → 9999.',
  meme:'"Proxy pattern with __getattr__! Meta programming peak! Final boss incoming! 😤"' },

{ id:100, world:5, type:'output',
  title:'⚡ FINAL BOSS — NULLBYTE CORE',
  story:'THIS IS IT. The final level. NULLBYTE\'s core algorithm stands between you and victory. One last Python challenge. The world is watching. No pressure. Just... save humanity. 🌍',
  badge:'boss', badgeClass:'tb-boss',
  hint:'Trace carefully: closures share state via list wrapper. Each call mutates count[0].',
  code:'def make_counter(start=0):\n    count = [start]\n    def inc(n=1):\n        count[0] += n\n        return count[0]\n    return inc\n\nc1 = make_counter(10)\nc2 = make_counter(0)\nc1(5)\nc1(5)\nval = c1(1)\nc2(val)\nprint(c1(0), c2(0))',
  ans:'21 21', pts:200,
  explain:'c1 starts at 10. c1(5)=15, c1(5)=20, c1(1)=21. val=21. c2(21)=21. c1(0)=21, c2(0)=21.',
  meme:'"YOU DID IT! 100 LEVELS! NULLBYTE DESTROYED! LEGEND STATUS ACHIEVED! 🏆🔥💥"' }

]; // end LEVELS

// ──────────────────────────────────────
// GAME STATE
// ──────────────────────────────────────
let GS = {
  score:0, lives:3, currentLevel:1,
  done:[], unlockedWorlds:[1],
  timer:null, timeLeft:60, activeLevel:1
};

function saveGS() {
  try { localStorage.setItem('pq2', JSON.stringify(GS)); } catch(e){}
}
function loadGS() {
  try {
    const s = localStorage.getItem('pq2');
    if (s) { const p = JSON.parse(s); GS = {...GS, ...p}; }
  } catch(e){}
}

// ──────────────────────────────────────
// NAVIGATION HELPERS
// ──────────────────────────────────────
function goTitle()    { showScreen('s-title'); }
function goWorldMap() { renderWorldMap(); showScreen('s-map'); }

// alias for onclick in HTML
function showWorldMap() { goWorldMap(); }

// ──────────────────────────────────────
// WORLD MAP
// ──────────────────────────────────────
function renderWorldMap() {
  document.getElementById('mapXP').textContent  = GS.score;
  document.getElementById('mapLvl').textContent = Math.min(GS.currentLevel, 100);

  const grid = document.getElementById('worldsGrid');
  grid.innerHTML = '';

  WORLDS.forEach(w => {
    const unlocked = GS.unlockedWorlds.includes(w.id);
    const wLevels  = LEVELS.filter(l => l.world === w.id);
    const comp     = wLevels.filter(l => GS.done.includes(l.id)).length;
    const pct      = Math.round((comp / 20) * 100);

    const card = document.createElement('div');
    card.className = 'world-card' + (unlocked ? '' : ' locked');
    card.style.setProperty('--wc', w.color);

    card.innerHTML = `
      <div class="wc-num">${w.id}</div>
      <div class="wc-icon">${w.emoji}</div>
      <div class="wc-name">WORLD ${w.id}: ${w.name}</div>
      <div class="wc-range">LEVELS ${w.range}</div>
      <div class="wc-desc">${w.desc}</div>
      ${unlocked
        ? `<div class="wc-prog-bar"><div class="wc-prog-fill" style="width:${pct}%"></div></div>
           <div class="wc-prog-text">${comp}/20 completed · ${pct}%</div>`
        : `<div class="wc-lock">🔒</div><div style="font-family:var(--font-code);font-size:11px;color:var(--dim);text-align:center">Complete previous world to unlock</div>`
      }
    `;
    if (unlocked) card.onclick = () => openLevelSelect(w.id);
    grid.appendChild(card);
  });
}

// ──────────────────────────────────────
// LEVEL SELECT
// ──────────────────────────────────────
function openLevelSelect(worldId) {
  const w = WORLDS[worldId - 1];
  document.getElementById('lsTitle').textContent = `${w.emoji} ${w.name}`;
  document.getElementById('lsSub').textContent   = `Levels ${w.range}`;
  document.getElementById('lsXP').textContent    = GS.score;

  const grid = document.getElementById('levelsGrid');
  grid.innerHTML = '';

  const start = (worldId - 1) * 20 + 1;
  const end   = worldId * 20;

  for (let i = start; i <= end; i++) {
    const isDone      = GS.done.includes(i);
    const isCurrent   = i === GS.currentLevel;
    const isUnlocked  = i <= GS.currentLevel;

    const btn = document.createElement('div');
    btn.textContent = i;
    btn.className = 'lvl-btn '
      + (isDone     ? 'done'
       : isCurrent  ? 'current'
       : isUnlocked ? 'unlocked'
       :              'locked');

    if (isUnlocked) btn.onclick = () => startLevel(i);
    grid.appendChild(btn);
  }

  showScreen('s-levels');
}

// ──────────────────────────────────────
// START LEVEL
// ──────────────────────────────────────
function startLevel(id) {
  const lvl = LEVELS.find(l => l.id === id);
  if (!lvl) return;

  GS.activeLevel = id;
  GS.lives       = 3;
  clearTimer();
  renderGame(lvl);
  showScreen('s-game');
  saveGS();
}

function retryLevel() { startLevel(GS.activeLevel); }

// ──────────────────────────────────────
// RENDER GAME
// ──────────────────────────────────────
function renderGame(lvl) {
  const w = WORLDS[lvl.world - 1];

  // Topbar
  document.getElementById('gLvlChip').textContent   = 'LVL ' + lvl.id;
  document.getElementById('gWorldChip').textContent = w.emoji + ' ' + w.name;
  document.getElementById('gXP').textContent        = GS.score;
  document.getElementById('progFill').style.width   = lvl.id + '%';
  updateHearts();

  // Timer
  GS.timeLeft = lvl.id > 80 ? 90 : 60;
  updateTimerDisplay();
  startTimer();

  // Hint
  document.getElementById('hintBody').textContent = lvl.hint || 'Think carefully, Agent.';

  // Build question HTML
  let qHTML = '';

  if (lvl.type === 'mcq' || lvl.type === 'debug') {
    const optsHTML = lvl.opts.map((opt, i) =>
      `<button class="mcq-opt" id="opt${i}" onclick="checkMCQ(${i},${lvl.ans},${lvl.id})">`
      + `<span style="color:var(--blue);margin-right:8px">${String.fromCharCode(65+i)}.</span>${escHtml(String(opt))}</button>`
    ).join('');
    qHTML = `
      <div class="hint-note">💬 ${escHtml(lvl.question).replace(/\n/g,'<br>')}</div>
      <div class="mcq-grid">${optsHTML}</div>
      <div class="action-row">
        <button class="btn-hint-small" onclick="openHint()">💡 HINT</button>
        <button class="btn-skip-small" onclick="skipLvl(${lvl.id})">⏭ SKIP</button>
      </div>`;

  } else if (lvl.type === 'output') {
    qHTML = `
      <div style="font-family:var(--font-code);font-size:11px;color:var(--blue);letter-spacing:2px;margin-bottom:6px">PREDICT THE EXACT OUTPUT:</div>
      <div class="code-block">${escHtml(lvl.code)}</div>
      <input type="text" class="out-input" id="outAns" placeholder="Type the exact output..." autocomplete="off" spellcheck="false">
      <div class="action-row">
        <button class="btn-submit" onclick="checkOutput(${lvl.id})">⚡ SUBMIT</button>
        <button class="btn-hint-small" onclick="openHint()">💡 HINT</button>
        <button class="btn-skip-small" onclick="skipLvl(${lvl.id})">⏭ SKIP</button>
      </div>`;

  } else if (lvl.type === 'fill') {
    let tpl = escHtml(lvl.template);
    lvl.blanks.forEach((_, i) => {
      const w = Math.max(60, (lvl.ans[i]||'').length * 13);
      tpl = tpl.replace('___', `<input type="text" class="blank-inp" id="blank${i}" style="width:${w}px" autocomplete="off" spellcheck="false">`);
    });
    qHTML = `
      <div style="font-family:var(--font-code);font-size:11px;color:var(--yellow);letter-spacing:2px;margin-bottom:6px">FILL IN THE BLANK(S):</div>
      <div class="fill-area">${tpl}</div>
      <div class="action-row">
        <button class="btn-submit" onclick="checkFill(${lvl.id})">⚡ SUBMIT</button>
        <button class="btn-hint-small" onclick="openHint()">💡 HINT</button>
        <button class="btn-skip-small" onclick="skipLvl(${lvl.id})">⏭ SKIP</button>
      </div>`;
  }

  document.getElementById('gameBody').innerHTML = `
    <div class="story-panel">
      <div class="story-panel-tag">📡 TRANSMISSION // LEVEL ${lvl.id} of 100</div>
      <div class="story-panel-text">${lvl.story}</div>
    </div>
    <div class="mission-panel">
      <div class="mission-tag">🎯 MISSION OBJECTIVE</div>
      <span class="type-badge ${lvl.badgeClass}">${lvl.badge.toUpperCase()}</span>
      <div class="mission-title">${lvl.title}</div>
      ${qHTML}
      <div id="feedbackArea"></div>
    </div>`;

  // Enter key for output/fill
  const oa = document.getElementById('outAns');
  if (oa) oa.addEventListener('keydown', e => { if (e.key === 'Enter') checkOutput(lvl.id); });

  if (lvl.type === 'fill') {
    lvl.blanks.forEach((_, i) => {
      const b = document.getElementById('blank'+i);
      if (b) b.addEventListener('keydown', e => { if (e.key === 'Enter') checkFill(lvl.id); });
    });
  }
}

function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ──────────────────────────────────────
// ANSWER CHECKING
// ──────────────────────────────────────
function checkMCQ(selected, correct, lvlId) {
  clearTimer();
  const btns = document.querySelectorAll('.mcq-opt');
  btns.forEach(b => b.disabled = true);

  if (selected === correct) {
    btns[selected].classList.add('correct');
    handleCorrect(lvlId);
  } else {
    btns[selected].classList.add('wrong');
    if (btns[correct]) btns[correct].classList.add('correct');
    const lvl = LEVELS.find(l => l.id === lvlId);
    loseLife(lvl);
  }
}

function checkOutput(lvlId) {
  const lvl    = LEVELS.find(l => l.id === lvlId);
  const input  = document.getElementById('outAns');
  if (!input) return;
  const val    = input.value.trim();
  if (!val)    { shakeEl(input); return; }

  clearTimer();
  if (val === lvl.ans.trim()) {
    handleCorrect(lvlId);
  } else {
    loseLife(lvl, `Expected: <code style="color:var(--green)">${escHtml(lvl.ans)}</code>`);
  }
}

function checkFill(lvlId) {
  const lvl = LEVELS.find(l => l.id === lvlId);
  clearTimer();
  let allOk = true;

  lvl.ans.forEach((a, i) => {
    const inp = document.getElementById('blank'+i);
    if (!inp) return;
    const ok = inp.value.trim() === a.trim();
    inp.classList.toggle('ok',  ok);
    inp.classList.toggle('err', !ok);
    if (!ok) allOk = false;
  });

  if (allOk) {
    handleCorrect(lvlId);
  } else {
    loseLife(lvl);
  }
}

function skipLvl(lvlId) {
  clearTimer();
  const next = LEVELS.find(l => l.id === lvlId + 1);
  if (next) {
    GS.currentLevel = Math.max(GS.currentLevel, lvlId + 1);
    saveGS();
    startLevel(next.id);
  }
}

// ──────────────────────────────────────
// CORRECT / WRONG HANDLERS
// ──────────────────────────────────────
function handleCorrect(lvlId) {
  const lvl     = LEVELS.find(l => l.id === lvlId);
  const bonus   = GS.timeLeft > 30 ? Math.floor(GS.timeLeft * 0.5) : 0;
  const pts     = lvl.pts + bonus;
  GS.score     += pts;

  if (!GS.done.includes(lvlId)) GS.done.push(lvlId);
  GS.currentLevel = Math.max(GS.currentLevel, lvlId + 1);

  // Unlock next world at world-end levels (20,40,60,80)
  if (lvlId % 20 === 0) {
    const nw = lvl.world + 1;
    if (nw <= 5 && !GS.unlockedWorlds.includes(nw)) GS.unlockedWorlds.push(nw);
  }
  saveGS();

  document.getElementById('gXP').textContent = GS.score;
  spawnXPPop(pts);
  spawnConfetti();

  const isBoss  = lvlId % 20 === 0;
  const isFinal = lvlId === 100;

  document.getElementById('feedbackArea').innerHTML = `
    <div class="feedback ok">
      <div class="fb-title">${isFinal ? '⚡ NULLBYTE ELIMINATED!' : isBoss ? '🏆 WORLD BOSS DEFEATED!' : '✅ CORRECT! SYSTEM PATCHED!'}</div>
      <div class="fb-explain">${escHtml(lvl.explain)}</div>
      ${bonus > 0 ? `<div class="fb-meme">⚡ Speed Bonus: +${bonus} pts</div>` : ''}
      <div class="fb-meme">💰 +${pts} XP · Total: ${GS.score}</div>
      <div class="fb-meme">${lvl.meme}</div>
      <button class="btn-next" onclick="advanceLevel(${lvlId})">
        ${isFinal ? '🏆 SEE VICTORY' : isBoss ? '🌍 WORLD COMPLETE' : '→ NEXT MISSION'}
      </button>
    </div>`;
}

function loseLife(lvl, extraMsg) {
  GS.lives--;
  updateHearts();
  const fb = document.getElementById('feedbackArea');
  const gameBodyEl = document.getElementById('gameBody');
  shakeEl(gameBodyEl);

  const memes = [
    '"Ayyo da! Python caught you lacking! 😭"',
    '"Wrong! NULLBYTE is doing a victory dance! 🕺"',
    '"Machan verify panni answer solu next time! 😤"',
    '"GG no re? Retry panna courage vendum! 💪"'
  ];

  fb.innerHTML = `
    <div class="feedback fail">
      <div class="fb-title">❌ WRONG! NULLBYTE LAUGHS!</div>
      <div class="fb-explain">${extraMsg || 'That is not the correct answer, Agent.'}</div>
      <div class="fb-meme">${memes[Math.floor(Math.random()*memes.length)]}</div>
      <div class="fb-meme">Lives: ${'❤️'.repeat(Math.max(0,GS.lives))}${'🖤'.repeat(Math.max(0,3-GS.lives))}</div>
    </div>`;

  if (GS.lives <= 0) {
    clearTimer();
    setTimeout(() => showGameOver(lvl), 1400);
  } else {
    // Add retry button
    const retryBtn = document.createElement('button');
    retryBtn.className = 'btn-hint-small';
    retryBtn.style.marginTop = '10px';
    retryBtn.textContent = '🔄 TRY AGAIN';
    retryBtn.onclick = () => retryLevel();
    fb.querySelector('.feedback').appendChild(retryBtn);
  }
}

function advanceLevel(lvlId) {
  if (lvlId === 100)         { showVictory(); return; }
  if (lvlId % 20 === 0)      { showWorldDone(lvlId); return; }
  const nxt = LEVELS.find(l => l.id === lvlId + 1);
  if (nxt) startLevel(nxt.id);
}

// ──────────────────────────────────────
// WORLD DONE / GAME OVER / VICTORY
// ──────────────────────────────────────
function showWorldDone(lvlId) {
  clearTimer();
  const lvl = LEVELS.find(l => l.id === lvlId);
  const w   = WORLDS[lvl.world - 1];

  document.getElementById('wdEmoji').textContent = w.emoji;
  document.getElementById('wdTitle').textContent = `WORLD ${w.id} COMPLETE!`;
  document.getElementById('wdStory').innerHTML   = w.story;
  document.getElementById('wdStats').textContent = `Score: ${GS.score} · ${GS.done.length} Levels Complete`;

  const nextBtn = document.getElementById('wdNextBtn');
  if (w.id < 5) {
    nextBtn.textContent = `⚡ ENTER WORLD ${w.id + 1}`;
    nextBtn.style.display = 'inline-block';
    nextBtn.onclick = () => startLevel(w.id * 20 + 1);
  } else {
    nextBtn.style.display = 'none';
  }

  spawnConfetti(80);
  showScreen('s-wdone');
}

function showGameOver(lvl) {
  const goms = [
    'Machan, 3 lives konjam kuda pothala? NULLBYTE full dancing! 🕺😂',
    'Python romba easy nu sonna yaaru? NULLBYTE approved your failure! 🎯',
    'Retry panna vaa. Shame feeling la code ezhuthuna thaan brain sharp aagum! 💪',
    'GG no re? NULLBYTE trash talking you in binary! 😂'
  ];
  document.getElementById('overMsg').textContent  = `Level ${GS.activeLevel} defeated you. NULLBYTE systems still active...`;
  document.getElementById('overMeme').textContent = goms[Math.floor(Math.random()*goms.length)];
  showScreen('s-over');
}

function showVictory() {
  clearTimer();
  document.getElementById('winStats').textContent = `Final Score: ${GS.score} · 100/100 Levels · LEGENDARY 🏆`;
  spawnConfetti(150);
  showScreen('s-win');
}


// ──────────────────────────────────────
// RESET CONFIRM
// ──────────────────────────────────────
function confirmReset() {
  document.getElementById('resetOverlay').classList.add('open');
  document.getElementById('resetModal').classList.add('open');
}

function closeReset() {
  document.getElementById('resetOverlay').classList.remove('open');
  document.getElementById('resetModal').classList.remove('open');
}

function doReset() {
  closeReset();
  clearTimer();
  GS = { score:0, lives:3, currentLevel:1, done:[], unlockedWorlds:[1], timer:null, timeLeft:60, activeLevel:1 };
  saveGS();
  // Reset login attempts too
  _loginAttempts = 5;
  const attEl = document.getElementById('attLeft');
  if (attEl) attEl.textContent = '5';
  const errEl = document.getElementById('loginErr');
  if (errEl) errEl.classList.remove('show');
  // Go back to title (not login — they're already authenticated)
  showScreen('s-title');
  // Small celebration that it reset 😂
  setTimeout(() => {
    const msgs = [
      'Machan reset pannitta! NULLBYTE happy aagidaan! 😂',
      'Fresh start da! This time World 5 varaikum ponga! 💪',
      'Reset complete! NULLBYTE escaped this time... revenge time! 😤'
    ];
    alert(msgs[Math.floor(Math.random()*msgs.length)]);
  }, 300);
}

function resetGame() {
  GS = { score:0, lives:3, currentLevel:1, done:[], unlockedWorlds:[1], timer:null, timeLeft:60, activeLevel:1 };
  saveGS();
  showScreen('s-title');
}

// ──────────────────────────────────────
// TIMER
// ──────────────────────────────────────
function startTimer() {
  clearTimer();
  updateTimerDisplay();
  GS.timer = setInterval(() => {
    GS.timeLeft--;
    updateTimerDisplay();
    if (GS.timeLeft <= 0) {
      clearTimer();
      const lvl = LEVELS.find(l => l.id === GS.activeLevel);
      loseLife(lvl, '⏰ TIME\'S UP! The system timed out! Machan timer dekkama? 😂');
    }
  }, 1000);
}
function clearTimer() {
  if (GS.timer) { clearInterval(GS.timer); GS.timer = null; }
}
function updateTimerDisplay() {
  const el = document.getElementById('gTimer');
  if (!el) return;
  el.textContent = GS.timeLeft + 's';
  el.className = 'timer-chip' + (GS.timeLeft <= 10 ? ' danger' : '');
}

// ──────────────────────────────────────
// HEARTS
// ──────────────────────────────────────
function updateHearts() {
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById('h'+i);
    if (el) el.className = (i > GS.lives ? 'lost' : '');
  }
}

// ──────────────────────────────────────
// HINT MODAL
// ──────────────────────────────────────
function openHint() {
  document.getElementById('hintOverlay').classList.add('open');
  document.getElementById('hintModal').classList.add('open');
}
function closeHint() {
  document.getElementById('hintOverlay').classList.remove('open');
  document.getElementById('hintModal').classList.remove('open');
}

// ──────────────────────────────────────
// ANIMATIONS
// ──────────────────────────────────────
function shakeEl(el) {
  if (!el) return;
  el.classList.remove('shake');
  void el.offsetWidth;
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 500);
}

function spawnConfetti(n=60) {
  const box = document.getElementById('confettiBox');
  const cols = ['#00ff88','#00d4ff','#ff0066','#ffdd00','#bf00ff','#ff6600'];
  for (let i = 0; i < n; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    const c = cols[Math.floor(Math.random()*cols.length)];
    const sz = 6 + Math.random()*8;
    p.style.cssText = `left:${Math.random()*100}%;top:-20px;width:${sz}px;height:${sz}px;`
      + `background:${c};border-radius:${Math.random()>.5?'50%':'2px'};`
      + `animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*0.4}s;`;
    box.appendChild(p);
    setTimeout(() => p.remove(), 3500);
  }
}

function spawnXPPop(pts) {
  const el = document.createElement('div');
  el.className = 'xp-pop';
  el.textContent = '+' + pts + ' XP';
  el.style.left = (35 + Math.random()*30) + '%';
  el.style.top  = (20 + Math.random()*20) + '%';
  document.getElementById('pointsBox').appendChild(el);
  setTimeout(() => el.remove(), 1800);
}

// ──────────────────────────────────────
// INIT
// ──────────────────────────────────────
loadGS();
