const STORAGE_KEY = "light-echo-campus-story-v12";

const CASE_DATA = {
  work: {
    name: "光屿",
    subtitle: "互动灯光装置 · 核心模块",
    creator: "2026 校园创作计划入选作品",
    opened: "预计 18:30",
    location: "原初书院 · 光影工坊",
  },
  scenes: [
    {
      id: "studio",
      index: "01",
      location: "原初书院 · 1F",
      title: "光影工坊",
      image: "./assets/yuanchu-building.jpg",
      summary: "主控台仍在运行，装载核心模块的透明匣却已经空了。十三分钟前，这里完成过最后一次试灯。",
      narration:
        "旁白：夕阳从原初书院的格栅外墙退下去时，光影工坊里响起最后一次开机提示音。十二秒后，环形灯墙像一次没说完的呼吸，突然停在黑暗中。没有人尖叫，也没有人立刻推门。四个人都站在原地，先看了一眼空匣，又看向彼此。",
      ambient: "新灯管受热后的轻响、控制台低频电流、远处电钻骤停后的回音。",
      narrative: [
        "17:47，环形灯墙只亮了十二秒便回到待机。技术组以为是程序故障，直到有人发现控制台下方的透明匣是空的。",
        "接口没有暴力破坏的痕迹，检修钥匙留下了顺时针旋痕。控制台缓存显示，最后一条亮度曲线保存于 17:44，账号为 TANG-YA。",
        "工作台压着一张被撕成两半的舞台走位表。背面只有一句话：“如果只留下一个名字，作品就不该被点亮。”",
        "操作台侧面贴着一张 2022 年的旧工作证，照片被人用黄色胶带盖住。胶带边缘已经卷起，背面露出四个手写字母：W·D·G。",
      ],
      clues: ["console"],
    },
    {
      id: "corridor",
      index: "02",
      location: "原初书院 · 东侧",
      title: "时光长廊",
      image: "./assets/campus-corridor.jpg",
      summary: "连接工坊与资料室的玻璃长廊。17:41 的玻璃反光里，出现了一只灰色设备箱和一条黄绿色工作牌挂绳。",
      narration:
        "旁白：长廊两侧挂着不同年份的校园活动横幅。风从玻璃缝隙里穿过，把最旧的一条吹得反复拍墙。有人曾在这里推着设备箱走过，轮子压过地砖的声音被回声拉得很长；那个人停过五秒，却没有回头。",
      ambient: "玻璃缝隙里的风声、远处脚步声、灯带启动的轻响。",
      narrative: [
        "长廊门禁在升级后保留了本地缓存。17:39，唐予安的工作卡打开过光影工坊；17:44，同一张卡打开了资料室 207。",
        "检修工具柜的领用纸显示，17:31 有人借走了一只内六角钥匙。签名栏写着沈越，但会议记录表明他当时正在与赞助方通话。",
        "保洁员记得，试灯前有一个女生推着设备箱从长廊迅速经过。对方没有回头，只留下轮子碾过地砖的连续声响。",
        "西侧玻璃上留着一道刚被擦过的指纹痕。按高度判断，有人曾在这里停下来看了很久；玻璃另一侧，刚好是资料室的门。",
      ],
      clues: ["accessLog", "keyLog"],
    },
    {
      id: "archive",
      index: "03",
      location: "原初书院 · 207",
      title: "资料室 207",
      image: "./assets/campus-arcade.jpg",
      summary: "旧展册、毕业创作手稿和未公开的影像带堆满房间。防潮柜顶部有一圈刚被擦掉的圆灰印。",
      narration:
        "旁白：资料室没有窗，旧挂钟的秒针每走一下，都像有人在纸上落下一笔。十三封信被压在展册中间，纸页上有三年前留下的折痕。这里保存过许多没被完成的方案，也保存着一个原本不该由某个人独自承担的约定。",
      ambient: "钟摆滴答、翻纸声、荧光灯管偶尔的电流颤音。",
      narrative: [
        "沈越的录音笔落在旧展册之间。电量耗尽前，它保存了一段没有发出去的语音。他提到“唐”“原始版本”和“今晚的灯”。",
        "项目署名确认单原本写着唐予安，后来被改成许澄。纸背压痕显示，原句是“主视觉与交互逻辑：唐予安、许澄”。",
        "墙上贴着 2022 年旧作《未寄出的光》的展签。新项目的环形灯阵与它高度相似，却没有引用说明。",
        "旧展册里夹着十三封从未寄出的信。每封信的右下角都画着同一个六格灯码；这些灯码后来组成了《光屿》的开场字幕。",
      ],
      clues: ["voiceMemo", "signature", "letters"],
    },
    {
      id: "courtyard",
      index: "04",
      location: "原初书院 · 中庭",
      title: "下沉庭院",
      image: "./assets/campus-courtyard.jpg",
      summary: "原计划作为《光屿》的室外回声区。开展前四十分钟，庭院里只有尚未点亮的灯架和一张被风吹走的节目单。",
      narration:
        "旁白：18:00 的校园仍然明亮，庭院里却没有人说话。尚未点亮的灯架绕着台阶排成一圈，像一场等待开场的观众。风把节目单吹到水池边，停在“开灯时间 18:30”那一行。远处广播正在循环提醒观众入场。",
      ambient: "庭院风声、树叶摩擦、远处广播与模糊人声。",
      narrative: [
        "校媒记者苏遥的备份相机一直对着东侧长廊。17:41:36，一段三秒的反光被保留在素材末尾。",
        "反光中无法辨认人脸，但黄绿色挂绳与三角形亚克力扣极具辨识度。唐予安在项目期间一直佩戴它。",
        "苏遥承认自己曾删改镜头顺序。她原本准备在开展后发布一篇关于《未寄出的光》的报道，却担心这场调查会毁掉所有人。",
        "庭院台阶下压着一张 2022 年的合照。照片里，唐予安、许澄和苏遥站在一台故障灯架前，三个人都笑得很狼狈，背面写着：“等下一次灯亮。”",
      ],
      clues: ["lanyard", "oldPhoto"],
    },
  ],
  clues: {
    console: {
      title: "十二秒的播放记录",
      type: "数字记录 / 光影工坊",
      short: "最后一次亮度曲线由唐予安保存，核心模块在那之后被完整卸下。",
      detail:
        "主控台没有病毒，也没有远程登录。17:44:08，账号 TANG-YA 导入一份新的亮度曲线；十七秒后，核心模块接口从系统中断开。",
      quote: "17:44:08 SAVE CURVE / TANG-YA\n17:44:25 CORE MODULE OFFLINE\n17:47:16 PLAY TEST / 12 SEC",
      implication: "试灯只亮十二秒不是故障。核心模块在试灯前就已经被人取出，而操作者拥有唐予安的账号权限。",
      visual: "12 SEC",
    },
    accessLog: {
      title: "两扇门的时间线",
      type: "电子记录 / 时光长廊",
      short: "唐予安的工作卡在 17:39 进入工坊，17:44 打开资料室。",
      detail:
        "门禁缓存保存了完整时间戳。17:44:21，资料室 207 的门锁被工作卡 TANG-YA 打开；停留记录持续了四分钟。",
      quote: "17:39:08 STUDIO / TANG-YA\n17:44:21 ARCHIVE 207 / TANG-YA\n17:48:12 ARCHIVE 207 / LIANG-KE",
      implication: "唐予安声称工作卡一直放在休息室，但记录把她放进了核心模块离开工坊后的必经路线。",
      visual: "17:44",
    },
    keyLog: {
      title: "不属于沈越的签名",
      type: "书证 / 检修工具柜",
      short: "17:31 的钥匙领用签名模仿了沈越，却与他当天的笔迹不同。",
      detail:
        "纸本登记显示沈越借走了控制台检修钥匙。笔迹对照发现，“越”字的收笔明显迟疑；同一时间，他正在与赞助方进行电话会议。",
      quote: "17:31 / CORE PANEL KEY / 签名异常",
      implication: "有人刻意用沈越的身份取走钥匙，掩盖自己准备打开核心模块匣的意图。",
      visual: "17:31",
    },
    voiceMemo: {
      title: "没有发出的语音",
      type: "音频 / 资料室 207",
      short: "沈越要求唐予安交出原始版本，并以取消她的署名作为交换。",
      detail:
        "录音长 00:19。沈越的声音平稳，背景里有旧挂钟整点报时和翻动展册的纸张声。",
      quote:
        "“唐，你把原始文件交出来，署名的事还能谈。今晚的灯只亮十二秒，不是我要抹掉你，是项目不能有两个中心。”",
      implication: "沈越把作品完整性与个人署名绑在一起，试图迫使唐予安接受被改写的创作者顺序。",
      visual: "00:19",
    },
    signature: {
      title: "被改写的署名单",
      type: "书证 / 资料室 207",
      short: "唐予安的名字被划去，核心创作被归给了负责对外沟通的许澄。",
      detail:
        "确认单原本写着“主视觉与交互逻辑：唐予安、许澄”，最终版本只保留许澄。纸背的笔尖压痕保留了最初的句子。",
      quote: "最终署名：许澄\n原姓名压痕：唐予安\n引用作品：《未寄出的光》2022",
      implication: "这既解释了唐予安的动机，也解释了为什么她没有选择公开争吵：作品本身正在被悄悄改写。",
      visual: "原作",
    },
    lanyard: {
      title: "长廊里的三秒",
      type: "影像 / 下沉庭院",
      short: "17:41:36，玻璃反射出唐予安特有黄绿色工作牌与灰色设备箱。",
      detail:
        "画面不足以辨认人脸，但黄绿色织带、三角形扣件和箱侧的白色贴纸都能对上唐予安的工具箱。",
      quote: "REC 17:41:36 / 3 秒 / 黄绿色织带 / 灰色箱体",
      implication: "唐予安在核心模块离线后带着设备箱穿过长廊，时间与资料室门禁记录相衔接。",
      visual: "3 SEC",
    },
    letters: {
      title: "未寄出的十三封信",
      type: "纸本记忆 / 资料室 207",
      short: "没有收件人的信被编入灯码，成为《光屿》开场最安静的一段光。",
      detail:
        "十三封信写于 2022 年旧展停摆当晚，内容有关告白、道歉与告别。每封信背后都有六格明暗灯码；今年的《光屿》开场字幕正在逐字播放这些编码。",
      quote: "2022.11.03 / 未寄出 / 收件人：没有写下的人",
      implication: "核心模块承载的不只是项目文件，还保存着三年前参与者不愿被替代的私人记忆。",
      visual: "13",
    },
    oldPhoto: {
      title: "四个人的旧合影",
      type: "影像记忆 / 下沉庭院",
      short: "2022 年的故障灯架前，四个人约定“等下一次灯亮”。",
      detail:
        "照片背面有唐予安的字：“不是失败，只是还没轮到我们亮。” 许澄在合影右侧，苏遥举着相机，站在最左边的是年轻时的梁恪。",
      quote: "2022.11.03 / 曾约定：下一次灯亮时，一个名字都不能少。",
      implication: "这场事件并非临时冲突。它源于一个未完成的约定，也源于三个人对同一段青春不同的保护方式。",
      visual: "2022",
    },
  },
  suspects: [
    {
      id: "tang",
      no: "S-01",
      name: "唐予安",
      short: "TANG",
      role: "24 岁 · 研究生助教 / 技术统筹",
      alibi: "自称 17:20–17:50 一直在休息室核对灯光流程，工作卡留在背包侧袋。",
      bio: "《光屿》真正的交互设计者。安静、敏锐，习惯把情绪藏进代码和光线里。",
      questions: [
        {
          id: "tangWhere",
          label: "试灯前的半小时，你在哪里？",
          answer:
            "“在休息室看流程。17:39 左右我去过一次洗手间，很快就回来了。工作卡应该在背包里。”",
        },
        {
          id: "tangCard",
          label: "谁能证明工作卡没有离开过休息室？",
          answer:
            "“没有人。那段时间只有我。但门禁记录不会说谎，它只能证明卡去过哪里，不能证明拿卡的人是谁。”",
        },
        {
          id: "tangConflict",
          label: "你和沈越的署名争议，具体是什么？",
          answer:
            "“他要删掉我的名字，也要删掉对《未寄出的光》的引用。他说观众只记得站在台上的人，不记得写代码的人。”",
        },
        {
          id: "tangKey",
          label: "17:31 的检修钥匙，是你冒名领走的吗？",
          requires: "keyLog",
          answer:
            "“签名是我练的。沈越让我帮他签领件单，后来我发现他也用同样的方式替我答应了很多事。包括放弃署名。”",
        },
        {
          id: "tangConsole",
          label: "为什么主控台会用你的账号断开模块？",
          requires: "console",
          answer:
            "“账号登录不代表我站在控制台前。可是……如果你们已经找到模块，应该也知道它现在连接的是哪台机器。”",
        },
      ],
    },
    {
      id: "xu",
      no: "S-02",
      name: "许澄",
      short: "XU",
      role: "22 岁 · 数媒专业 / 项目负责人",
      alibi: "称 17:20–17:50 在会议室 213 与三名组员修改展签。",
      bio: "擅长协调资源，也是《光屿》对外介绍中的“主创”。他知道每一次镜头应该怎样被看见。",
      questions: [
        {
          id: "xuWhere",
          label: "试灯时你在做什么？",
          answer:
            "“在会议室改展签。三个人都在，我离开过两分钟接电话。听说灯出问题后，我第一时间赶去了工坊。”",
        },
        {
          id: "xuCall",
          label: "你为什么在 17:43 给沈越发消息？",
          answer:
            "“我写的是‘署名不改，我今晚让所有人看到原文件’。我只是想把这件事逼到桌面上，不是想毁掉展演。”",
        },
        {
          id: "xuSignature",
          label: "你知道署名单上的名字被改过吗？",
          requires: "signature",
          answer:
            "“我只看过最终 PDF。沈越说唐予安同意了。我以为自己只是负责对外沟通，不该拿走她的核心创作。”",
        },
        {
          id: "xuTeam",
          label: "唐予安最近有没有异常？",
          answer:
            "“她昨天问过我：如果作品被改了名字，它还是不是自己的？我当时没回答。现在想想，那不是在问作品。”",
        },
      ],
    },
    {
      id: "liang",
      no: "S-03",
      name: "梁恪",
      short: "LIANG",
      role: "35 岁 · 展陈设备管理员",
      alibi: "称 17:25–17:48 一直在库房整理第二天要归还的设备。",
      bio: "负责原初书院所有展陈设备的借还。最怕的不是设备坏，而是没人按规定登记。",
      questions: [
        {
          id: "liangWhere",
          label: "17:30 左右，你在哪里？",
          answer:
            "“库房。17:31 我确实发出一只检修钥匙，签名写的是沈越。项目负责人来领，我不会多问。”",
        },
        {
          id: "liangEntry",
          label: "17:48 你为什么进入资料室？",
          requires: "accessLog",
          answer:
            "“我去找一只丢失的无线接收器。门没锁，房间里没人。防潮柜前的地上有一小段绝缘胶带，我当时没在意。”",
        },
        {
          id: "liangKey",
          label: "钥匙柜里的签名真有那么难辨认吗？",
          requires: "keyLog",
          answer:
            "“说实话，我看出来了。那个签名比沈越平时写得工整。但当时开展在即，我只想尽快让流程往前。”",
        },
        {
          id: "liangModule",
          label: "核心模块能这么轻易被卸下来吗？",
          answer:
            "“懂接口的人两分钟就够了。它不是被偷出的保险箱，只是一块需要被正确对待的创作。”",
        },
      ],
    },
    {
      id: "su",
      no: "S-04",
      name: "苏遥",
      short: "SU",
      role: "21 岁 · 校园媒体记者",
      alibi: "称 17:35–17:50 在下沉庭院拍摄开灯前的空镜。",
      bio: "正在制作一期关于校园原创作品的专题。她手里既有能证明抄袭的旧展册，也有会伤害朋友的影像。",
      questions: [
        {
          id: "suWhere",
          label: "试灯时你为什么在下沉庭院？",
          answer:
            "“拍开灯前的空镜。玻璃长廊会映出整座书院，我一直想拍那个画面。没想到也会拍到一只设备箱。”",
        },
        {
          id: "suClash",
          label: "沈越知道你在调查《未寄出的光》吗？",
          answer:
            "“他知道。他要我删掉旧作对比，说那只是公共展览里的‘视觉巧合’。我拒绝了，他就要向学院投诉我。”",
        },
        {
          id: "suFootage",
          label: "那段备份影像里，你看见了谁？",
          requires: "lanyard",
          answer:
            "“玻璃反光里有一条黄绿色挂绳。我知道那是唐予安的，但一条挂绳证明不了她做了什么。我不想让一张截图替她说完所有话。”",
        },
        {
          id: "suVoice",
          label: "你认为作品为什么会被拿走？",
          requires: "voiceMemo",
          answer:
            "“沈越不是在讨论方案，他是在逼她选择。作品被拿走，也许不是为了毁掉展演，而是为了让它不能再以别人的名字亮起来。”",
        },
      ],
    },
  ],
  contradictionOptions: [
    { id: "tang", text: "唐予安——她说卡在休息室，但 17:44 的资料室门禁记录属于她的卡。" },
    { id: "xu", text: "许澄——他承认发了署名消息，却声称只为推动讨论。" },
    { id: "su", text: "苏遥——她拍了长廊，但镜头里只能确认一条挂绳。" },
    { id: "liang", text: "梁恪——他违反了严格的登记流程，却坚称没有隐瞒。" },
  ],
  timeline: [
    { id: "key", time: "17:31", text: "有人用沈越名义领走控制台检修钥匙" },
    { id: "remove", time: "17:39", text: "光影工坊的核心模块接口离线" },
    { id: "lanyard", time: "17:41", text: "长廊反射出黄绿色挂绳与灰色设备箱" },
    { id: "archive", time: "17:44", text: "资料室 207 被唐予安的工作卡打开" },
    { id: "test", time: "17:47", text: "最后一次试灯只亮十二秒便回到待机" },
  ],
  final: {
    killers: [
      { value: "tang", text: "唐予安" },
      { value: "xu", text: "许澄" },
      { value: "liang", text: "梁恪" },
      { value: "su", text: "苏遥" },
    ],
    motives: [
      { value: "credit", text: "阻止核心创作署名被改写" },
      { value: "fame", text: "争夺项目负责人身份" },
      { value: "equipment", text: "隐瞒设备借还违规" },
      { value: "report", text: "抢在报道发布前制造话题" },
    ],
    methods: [
      { value: "archive", text: "卸下核心模块并藏入资料室防潮柜" },
      { value: "destroy", text: "彻底销毁核心模块以终止展演" },
      { value: "remote", text: "从校外远程删除播放程序" },
      { value: "swap", text: "用旧展演硬盘替换核心模块" },
    ],
    evidence: [
      { value: "record", text: "17:44 资料室门禁记录 + 主控台离线记录" },
      { value: "message", text: "许澄发送的署名争议消息" },
      { value: "key", text: "梁恪发出的检修钥匙" },
      { value: "camera", text: "苏遥在下沉庭院拍到的空镜" },
    ],
  },
};

const NARRATIVE_LAYERS = {
  overviewNarration:
    "旁白：那天傍晚，原初书院的灯比往常亮得更早。观众还在地图上寻找入口，四个人已经各自守着一部分真相。没有人知道自己是不是唯一说谎的人，也没有人知道，一场关于作品署名的争执，会让整座校园听见十三封没有寄出的信。",
  lore: {
    year: "2022 / 11 / 03",
    title: "三年前，灯光只亮了六分钟",
    subtitle: "一次没有写进简历的失败，成了四个人共同的起点。",
    paragraphs: [
      "2022 年秋，唐予安、许澄与苏遥在课程展中搭起《未寄出的光》：观众把没能说出口的话写在灯码卡上，装置再把文字翻译成一盏盏明暗。",
      "开展当晚，展区电路超载，整组灯只亮了六分钟。现场有人摔倒，活动被紧急叫停。唐予安没有解释，独自留在雨里拆灯；许澄配合主办方写了检讨；苏遥拍下全过程，却没有发布。",
      "梁恪当时是负责借电的学生助理。他承认没有核对功率，也因此错过了毕业作品推荐。沈越则把这次事故写进课程评价：“概念过于私人，不建议继续。”",
      "四个人约定，等下一次灯亮，要把十三封没人寄出的信一起带回展场。但那次以后，项目没有再被批准，唐予安被传成“为了掩盖故障而主动断电的人”。",
      "今年，沈越以《光屿》为名重新申报项目，邀请许澄担任对外主创、唐予安担任技术统筹。开展前，他删掉了所有对《未寄出的光》的引用，也删掉了原始创作者顺序。",
    ],
    quote: "“不是失败，只是还没轮到我们亮。”——写在旧合影背面",
  },
  sceneDetails: {
    studio: [
      {
        label: "空匣边缘",
        text: "锁扣外侧有反复擦拭的痕迹，但没有撬动伤。取走模块的人熟悉设备，也不想让场面看起来像盗窃。",
      },
      {
        label: "地脚纤维",
        text: "舞台左地脚粘着一小段黄绿色织线，与唐予安工作牌挂绳的颜色一致。",
      },
      {
        label: "撕开的工作证",
        text: "旧工作证上的照片被黄色胶带盖住，背面“W·D·G”是《未寄出的光》四个人当年的内部缩写。",
      },
    ],
    corridor: [
      {
        label: "玻璃反光",
        text: "设备箱不是被抬着，而是贴着右侧护栏推行。箱主很在意重心，也不想让轮子发出太大声音。",
      },
      {
        label: "门禁空档",
        text: "17:39 到 17:44 之间，没有任何其他人的门禁记录。五秒的迟疑后，207 的门锁才被打开。",
      },
      {
        label: "提前亮起的灯带",
        text: "长廊有一盏感应灯比试灯时间早亮了四分钟。保洁员因此记住了一只灰箱和一个始终低着头的女生。",
      },
    ],
    archive: [
      {
        label: "防潮柜灰印",
        text: "圆灰印边缘有四个新指痕，尺寸与唐予安常戴的工作手套吻合。灰印中央留着一道很浅的方形压痕。",
      },
      {
        label: "旧展册",
        text: "展册最后一页被整页撕走，只剩订书钉。对应页码正好是 2022 年《未寄出的光》的主创名单。",
      },
      {
        label: "墙上的钟",
        text: "旧挂钟停在 17:44。录音笔中的整点报时与它无关，却恰好成了有人停在房间里的无声注脚。",
      },
    ],
    courtyard: [
      {
        label: "折返轮印",
        text: "设备箱先向东侧去，又在台阶前折回半步。推箱的人曾想把它带出原初书院，最后改变了主意。",
      },
      {
        label: "被风吹走的节目单",
        text: "节目单背面手写着一行字：“第一幕不是灯亮，是有人愿意听完。”",
      },
      {
        label: "台阶下的合照",
        text: "照片被压在石头下，没有淋湿。有人提前把它带到这里，好像在等一个合适的时刻重新捡起来。",
      },
    ],
  },
  micro: {
    tangWhere: {
      expression: "她说“洗手间”时没有移开视线，右手食指却一直压着工作牌边缘。",
      subtext: "她不是在努力回忆，而是在努力把时间拼成一段不会伤到任何人的说法。",
    },
    tangCard: {
      expression: "听到“谁能证明”时，她的视线短暂落到背包，随即重新看向桌面。",
      subtext: "她早就知道没有人能证明。那句话听起来像辩解，更像一次试探。",
    },
    tangConflict: {
      expression: "她停了整整两秒，用拇指抹掉桌面上一道灰，直到那里再没有痕迹。",
      subtext: "被删掉的名字比争执本身更让她难以开口。她想保护的是作品，不是胜负。",
    },
    tangKey: {
      expression: "她笑了一下，笑意没有到眼睛；手背贴在工作证内侧，像在确认什么东西还在。",
      subtext: "冒名领钥匙是事实，但她也因此第一次确认，沈越会替别人决定什么值得被留下。",
    },
    tangConsole: {
      expression: "她先问“谁告诉你的”，比回答快了半拍；随后垂下眼，呼吸慢下来。",
      subtext: "她以为机器记录会替她隐瞒。被看见的不是操作，而是她仍想保住那段记忆。",
    },
    xuWhere: {
      expression: "他一直在整理袖口，听到“试灯”时动作突然停住，指节停在第二颗纽扣上。",
      subtext: "他人在会议室，心却早就知道工坊会出事。他没有参与取走模块，但知道有人在挣扎。",
    },
    xuCall: {
      expression: "他说“不是想毁掉展演”时，喉结动了一下，随后把手机屏幕扣在桌上。",
      subtext: "那句话更像说给他自己听。他既想要名字，也知道自己承受不起那个名字的重量。",
    },
    xuSignature: {
      expression: "看见被划掉的名字，他往后退了半步，嘴唇张开又合上，没有立刻辩解。",
      subtext: "愧疚先于惊讶出现。他不是第一次怀疑署名的来源，只是选择相信了对自己有利的版本。",
    },
    xuTeam: {
      expression: "提到唐予安“问了什么”时，他下意识看向窗外长廊，眼角绷得很紧。",
      subtext: "他想起了那个没有回答的问题。真正让他难受的，是自己当时明明听懂了。",
    },
    liangWhere: {
      expression: "他回答前先看了眼门，像在确认没有人会突然进来；说到“沈越”时声音低了一度。",
      subtext: "他记得签名不对，却没有拦下。对他来说，流程疏漏是比被指责更熟悉的逃避方式。",
    },
    liangEntry: {
      expression: "他搓了搓拇指，像是在摸一段不存在于手上的绝缘胶带；目光没有落在任何人身上。",
      subtext: "他清楚自己错过了最后一次纠正的机会，也害怕又被人记成“只会事后出现的人”。",
    },
    liangKey: {
      expression: "被指出签名问题时，他短暂地闭眼，叹气比回答早了一步。",
      subtext: "他不是不会辨认字迹，而是不想在开展前承担拦下项目的责任。",
    },
    liangModule: {
      expression: "说到“需要被正确对待”时，他抬眼看了镜头半秒，手指在桌面上轻轻敲了三下。",
      subtext: "他在说设备，也在说三年前那个没人替他们拆完灯架的晚上。",
    },
    suWhere: {
      expression: "她回答“空镜”时笑得很轻，右手却反复摸相机背带的磨损处。",
      subtext: "她确实在拍空镜，但镜头一直没离开长廊。那不是一个记者的偶然等待。",
    },
    suClash: {
      expression: "提到“视觉巧合”时，她的下巴抬了一下，眼神里出现短暂而锋利的反感。",
      subtext: "她可以接受作品失败，无法接受失败被人拿走后再改一个名字。",
    },
    suFootage: {
      expression: "看到那三秒画面，她的拇指停在播放键上方，迟迟没有按下。",
      subtext: "她在保护唐予安，也在保护自己。她害怕一旦公开，朋友会变成报道里的一个标签。",
    },
    suVoice: {
      expression: "听完录音，她沉默了很久，眼神落到桌角那叠没寄出的展册上。",
      subtext: "她终于明白唐予安要拿走的不是程序，而是三个年轻人曾经被允许相信的那一点光。",
    },
  },
  hearts: {
    tang:
      "唐予安不是舍不得作品，她舍不得的是 2022 年那个没人相信的晚上。她担心一旦作品以错误的名字亮起，那些没有寄出的信就会永远失去收件人。",
    xu:
      "许澄清楚自己不配独占主创署名，却一直没有在众人面前说出口。他想要的从来不是那束光本身，而是站到光里时，终于有人能看见自己。",
    liang:
      "梁恪不是在怕处罚。他怕再次成为事故结束后才出现的人，所以宁愿忽略一个可疑的签名，也没有亲手拦下开展前的最后一小时。",
    su:
      "苏遥可以把所有真相写进报道，但报道只需要一个结论。她更想留下的是四个人的选择，以及那句还没有被兑现的“等下一次灯亮”。",
  },
  npcs: [
    {
      id: "shen",
      name: "沈越",
      title: "项目发起人 / 外聘策展顾问",
      age: "31 岁",
      image: "./assets/portraits/shen.svg",
      location: "原初书院接待区",
      quote: "“一个作品能不能被看见，先取决于它有没有按时亮起来。”",
      testimony: [
        "沈越拒绝面对面询问，只留下两段经过剪辑的语音。他坚持认为核心模块是“被恶意转移”，并要求在开展前恢复系统。",
        "语音末尾，他提到唐予安时停顿了两秒：“她只是技术执行者。真正面对媒体和赞助方的人，是许澄。”",
      ],
      observation: "每段录音开头都有同样的杯碟碰撞声，说明他当时正在接待区与赞助方会面，并没有进入过工坊。",
    },
    {
      id: "lu",
      name: "陆师傅",
      title: "原初书院夜班门卫",
      age: "52 岁",
      image: "./assets/portraits/lu.svg",
      location: "东侧门岗",
      quote: "“她说是备用零件。我看箱子不重，就帮她扶了一下门槛。”",
      testimony: [
        "17:40 左右，唐予安推着灰色设备箱经过东侧门岗。陆师傅问是否需要叫人，她回答“备用零件，马上回来”。",
        "他记得唐予安那天没有戴耳机，脚步很慢。箱子在门槛处卡住时，她先护住箱角，再让门卫帮忙抬过门槛。",
      ],
      observation: "门岗监控在 17:39—17:44 没拍到任何校外人员进入。所谓“外部破坏”没有事实支撑。",
    },
    {
      id: "han",
      name: "韩梅",
      title: "资料室保洁员",
      age: "46 岁",
      image: "./assets/portraits/han.svg",
      location: "原初书院 2F",
      quote: "“我以为是谁在背台词。后来听见另一个孩子也在说‘对不起’。”",
      testimony: [
        "17:46，韩梅在资料室外听见两个人压低声音争吵。其中一人几乎没说话，只在最后说了一句“你想要的是名字，不是作品”。",
        "她推门时只看见许澄站在门边，唐予安已经不在房间里。许澄问她“有没有看见一个灰色箱子”，随后说自己只是来确认展签。",
      ],
      observation: "资料室门锁没有撬痕，门内有一小截黄绿色织线。保洁员能确认，17:46 前后进入房间的人不止一个。",
    },
    {
      id: "xiaoman",
      name: "林小满",
      title: "展演志愿者 / 大二学生",
      age: "20 岁",
      image: "./assets/portraits/xiaoman.svg",
      location: "下沉庭院签到处",
      quote: "“许澄学长背对着镜子练了三遍道歉，可他从头到尾没走进去。”",
      testimony: [
        "17:42，林小满看见许澄站在资料室门外，手里握着手机。他对着黑掉的窗玻璃低声练习“对不起，主创不是我一个人”。",
        "17:49，她又看见梁恪从资料室方向跑出来，神色比平时更慌。他让她不要锁资料室，说“里面还有一台旧设备没登记”。",
      ],
      observation: "签到处广播在 17:42 播报过一次“请主创许澄前往接待区”，他当时没有回应，也没有离开资料室门外。",
    },
  ],
  endings: {
    creator: {
      title: "让原作者亲手开灯",
      text:
        "你把核心模块交回唐予安。18:42，她站上控制台，把开场字幕改成“《未寄出的光》原案：唐予安、许澄、苏遥、梁恪”。沈越的名字被放在项目支持者栏，没有消失，也不再占据创作的位置。十三封信的灯码亮起来时，长廊里没有人鼓掌，但也没有人低头。",
    },
    public: {
      title: "让所有人看见完整档案",
      text:
        "你把旧合影、署名单与十三封信一并投在原初书院外墙。许澄主动拿起话筒，第一次向观众说明作品的全部来源。苏遥把报道标题改成《作品没有消失，只是等了三年》。18:44，灯终于亮起，沈越站在人群最后，没有上前。",
    },
  },
};

const ROLE_DATA = {
  tang: {
    no: "ROLE 01",
    name: "唐予安",
    short: "TANG",
    title: "技术统筹 / 灯光逻辑设计",
    tagline: "如果作品被叫错名字，它还算完成吗？",
    playStyle: "创作者视角 · 秘密持有者 · 情感抉择",
    color: "#d6b56d",
    publicStory:
      "你是《光屿》的技术统筹，也是整套灯光逻辑真正的设计者。三年前，你和许澄、苏遥、梁恪曾让另一件作品短暂亮起。失败之后，你不再公开谈论它，只把所有原始代码留在自己的硬盘里。",
    privateStory: [
      "今年，你答应以“技术统筹”的身份回到项目，是因为沈越承诺：开展字幕会恢复《未寄出的光》的原始来源。但今天下午，你看到的远不是那样。",
      "17:39，你亲手取下了核心模块。你没有拆掉任何一段代码，而是把它带到资料室，备份原始署名和十三封信，再锁进防潮柜。你到底想保护作品，还是想逼所有人在最后一刻看向你？",
      "现在，距离开展只剩四十三分钟。主持人沈越坚持把事件定性为破坏。你知道真相，但你必须决定什么时候说、对谁说，以及是否还愿意相信另外三个人。",
    ],
    secret:
      "核心模块是你拿走的。你原本打算在 18:00 前切回系统，却听见沈越告诉赞助方：唐予安“只是执行技术，不是作者”。",
    stance:
      "作品首先是创作者共同经历的沉淀。可以推迟开幕，可以承担指责，但不能以谎言的名字被看见。",
    psychology: {
      opening:
        "我告诉自己，拿走核心模块只是让它晚一点被叫错名字。可每一次走廊灯亮起，我都像在等一个不会来的人问我：你为什么不直接把真相说出来？",
      middle:
        "他们找到的证据越多，我反而越轻松。也许我从来不是想逃，只是不敢成为第一个承认“我们都不够勇敢”的人。",
      late:
        "如果最后一束光还需要有人开，我希望那个人是我。不是为了证明作品属于我，而是为了让三年前的我们终于有一个完整的句号。",
    },
    objective:
      "确认三个人的真实立场，在开场前让作品以完整、诚实的名字重新亮起。",
    perspectives: {
      studio: "你熟悉控制台的每一次蜂鸣。空匣不是故障，是你亲手留下的证据。你最担心的不是被查出来，而是他们根本没看见你删掉的东西。",
      corridor: "设备箱贴着右侧护栏时，你曾停下五秒。玻璃另一侧是资料室，也是三年前那份失败作品唯一剩下的地方。",
      archive: "十三封信仍按当年的顺序放着。你记得每一封信对应的灯码，却不确定今天还有谁愿意听完它们。",
      courtyard: "你曾想把设备箱带出原初书院。台阶前，你听见苏遥快门的声音，于是折回——你仍然希望有人知道你没想逃。",
    },
    reactions: {
      xu: "许澄不是坏人，只是太想在光里被看见。你必须判断，他的沉默究竟算共犯，还是一个还没来得及说出口的道歉。",
      liang: "梁恪一直在弥补三年前的错误。你怨他当年没有站出来，但也知道他是唯一记得完整团队名单的人。",
      su: "苏遥始终握着相机，也握着所有人的退路。你最怕她为了你删掉证据，又从另一条路上失去自己。",
    },
    tasks: [
      { id: "tang-photo", label: "找到 2022 年四个人的旧合影", type: "clue", target: "oldPhoto" },
      { id: "tang-xu", label: "听许澄解释被改写的署名单", type: "question", target: "xuSignature" },
      { id: "tang-su", label: "听苏遥读完十三封信后的选择", type: "question", target: "suVoice" },
      { id: "tang-ending", label: "让原作者亲手点亮最后一束光", type: "ending", target: "creator" },
    ],
    preferredEnding: "creator",
    endpoint: "创作者的第一人称",
    endings: {
      success:
        "你亲手合上旧的署名页，再打开新的开场字幕。那一刻你才发现，被看见并没有让你失去作品，反而让十三封信第一次有了收件人。",
      compromise:
        "你接受了完整公开的结局。名字被所有人看见，也被所有人讨论。你没有完全得到想要的安静，但终于不必再独自保管那段过去。",
      unfinished:
        "你还来不及确认所有人的选择，开幕灯已经亮了。作品重新运转，可你仍没有说出那个名字——它像一束没有落点的光，悬在你和另外三个人之间。",
    },
  },
  xu: {
    no: "ROLE 02",
    name: "许澄",
    short: "XU",
    title: "项目负责人 / 对外主创",
    tagline: "所有人都在看他，没人知道他有多怕。",
    playStyle: "公众角色 · 舆论压力 · 道歉与担当",
    color: "#b8d9c8",
    publicStory:
      "你是《光屿》的项目负责人，也是宣传稿里的主创。你能记住每一次采访、每一张展签和每一位来宾，却很少提起三年前那场只亮了六分钟的失败。",
    privateStory: [
      "几周前，沈越把署名单发给你，说唐予安已经同意把核心创作记为你的名字。你看见了 PDF 上不自然的重写痕迹，却没有追问。",
      "你告诉自己，只要展演成功，所有人都会得到更好的未来。可 17:43 发出的那句“今晚必须把署名定下来”，让这份沉默变成了你必须解释的秘密。",
      "现在，宣传渠道已经发出“主创许澄”的采访预告。你必须在保住展演、找回作品和承认错误之间，决定自己到底是不是一个值得被看见的人。",
    ],
    secret:
      "你发现过署名单被改，却用“先把展演做完”说服自己。沈越打给你的每一通电话，都像一份延迟生效的共犯协议。",
    stance:
      "先让灯亮起来。责任可以在开灯后承担，但一个没有亮起的作品，连被误解的机会都没有。",
    psychology: {
      opening:
        "我最怕的不是别人发现我错了，而是灯真的不再亮。只要还能站在台上，我就还有机会把“许澄”这个名字变成值得被相信的人。",
      middle:
        "每听一个人说话，我都更像那个抢走别人作品的人。奇怪的是，这种羞耻比掌声更真实，也更让我确定自己不能继续躲下去。",
      late:
        "我想说一句不属于宣传稿的话。它不漂亮，也不会让所有人原谅我，但至少应该由我亲口说出来。",
    },
    objective:
      "找回作品并确保展演进行，同时公开承认自己在署名问题上的沉默。",
    perspectives: {
      studio: "你每天站在控制台前接受拍摄，却从未写过那十二秒的控制逻辑。空匣让你第一次意识到，自己解释不了一件真正属于作品的事。",
      corridor: "长廊里的展签全是你的名字。现在它们像一排反问：如果没有唐予安的代码，你究竟负责了什么？",
      archive: "你看见被划掉的名字时，比看见核心模块更害怕。因为模块可以找回，而你选择沉默的那个下午无法重来。",
      courtyard: "这里原本应该是你接受采访的地方。苏遥的镜头让你想起三年前，自己也曾站在灯坏掉以后，手足无措。",
    },
    reactions: {
      tang: "唐予安说话时从不提高音量。你曾经羡慕这种确定感，现在才明白，那可能是被误解太久以后才学会的自我保护。",
      liang: "梁恪总说登记和流程，其实他一直把那次事故算在自己身上。你开始怀疑，是不是每个人都比你说得更早、更勇敢。",
      su: "苏遥知道你的沉默，却还没有公开。她给你的不是包庇，而是一次在报道发出前自己开口的机会。",
    },
    tasks: [
      { id: "xu-signature", label: "亲手确认署名单被改写的压痕", type: "clue", target: "signature" },
      { id: "xu-tang", label: "问唐予安真正想守护的是什么", type: "question", target: "tangConflict" },
      { id: "xu-console", label: "听懂唐予安对控制台记录的解释", type: "question", target: "tangConsole" },
      { id: "xu-ending", label: "让完整档案向所有观众公开", type: "ending", target: "public" },
    ],
    preferredEnding: "public",
    endpoint: "被看见之前的道歉",
    endings: {
      success:
        "你站在台上，没有引用宣传稿。你把三年前的失败、今天的沉默和更正后的全部名字讲完。灯亮时，掌声并不比想象中热烈，但你第一次觉得那是给作品的，不再只是给你。",
      compromise:
        "你把最后一束光交还给唐予安。她没有为难你，也没有替你解释。你站在侧幕看她开灯，终于明白被原谅不是结局，今后怎么说才是。",
      unfinished:
        "展演按时开始，你的名字仍出现在宣传稿最前面。人群散去以后，你在资料室门口站了很久，最终没有进去。那声道歉被留在了上一束光里。",
    },
  },
  liang: {
    no: "ROLE 03",
    name: "梁恪",
    short: "LIANG",
    title: "展陈设备管理员 / 旧项目借电人",
    tagline: "三年前没做完的事，今天还能补上吗？",
    playStyle: "流程推理 · 证据修复 · 沉默者视角",
    color: "#d2c4a3",
    publicStory:
      "你负责原初书院的设备借还，熟悉每一只箱子、每一枚钥匙和每一道会突然报警的回路。别人觉得你认死理，是因为他们不知道三年前那次失败给你留下了什么。",
    privateStory: [
      "2022 年，你为《未寄出的光》借来电，却没有核对功率。展演中断以后，你看着唐予安独自拆灯，没有替她说话，也失去了原本已经到手的毕业推荐。",
      "今年你主动回到项目，以为只要每张表格都签好，就能把过去补上。可是 17:31，你看出了领用签名不像沈越，还是把钥匙递了出去。",
      "你比任何人都在意“流程正确”，也比任何人清楚：流程从来不能替你承担选择的后果。现在，你得先承认自己的疏漏，再帮他们找回那束没有完成的光。",
    ],
    secret:
      "17:48 你在资料室看见过设备箱旁的胶带，却因为担心自己违规借出设备被追责，没有第一时间说出来。",
    stance:
      "先把所有细节留在记录里。情绪会骗人，至少设备的接口、时间和钥匙痕迹不会。",
    psychology: {
      opening:
        "我又一次拿到了需要判断的钥匙。上次我选择不多问，这次如果还一样，那我就真的把三年前那个错误活成了习惯。",
      middle:
        "每个时间戳都在提醒我：事故不是突然发生的，是一群人连续选择沉默之后才出现的。我也曾经是其中一个。",
      late:
        "把线接回原位并不难。难的是承认修好设备不等于修好人。可如果今天能让作品重新亮一次，我愿意把这份责任写进记录。",
    },
    objective:
      "查清核心模块离线的准确顺序，并把检修钥匙和资料室门禁的矛盾完整补上。",
    perspectives: {
      studio: "控制台锁扣没有受损，说明对方用了正确钥匙。你认得这种克制的手法，也隐约知道钥匙可能经过谁的手。",
      corridor: "门禁没有断线，灯带提前亮起，玻璃留有人停留过的指纹。你看到的是一个熟悉现场的人在尽量不破坏任何东西。",
      archive: "防潮柜的灰印还没有散。你想起自己 17:48 走进来时，地上的胶带还在——那一刻，你原本有机会更早知道答案。",
      courtyard: "台阶和轮印告诉你，设备箱曾准备离开原初书院，又在最后一刻回来。这里没有陌生人，只有一个反复说服自己的人。",
    },
    reactions: {
      tang: "她仍然不去责怪你三年前的失误，这反而让你更难承认，自己再一次选择了方便的那条路。",
      xu: "许澄一直强调展演不能停。你理解他，但设备记录不会为任何人的前途自动改口。",
      su: "苏遥拍到了你出错的证据，却没有拿它逼你。她比你更早明白，公开真相不等于抢先定罪。",
    },
    tasks: [
      { id: "liang-console", label: "复核心模块离线的时间记录", type: "clue", target: "console" },
      { id: "liang-key", label: "问唐予安冒名签名的原因", type: "question", target: "tangKey" },
      { id: "liang-timeline", label: "复原作品离开工坊的完整路线", type: "timeline" },
      { id: "liang-ending", label: "让创作者取回作品的解释权", type: "ending", target: "creator" },
    ],
    preferredEnding: "creator",
    endpoint: "从事故现场到修复者",
    endings: {
      success:
        "你最后一次检查控制台，把所有螺丝拧回原位。开灯那刻，你退到人群后面。没有人叫你的名字，但你终于完成了三年前没有做完的那次检修。",
      compromise:
        "你支持公开完整档案，并把自己当年的功率失误写进说明。观众看见的不再只是一个漂亮装置，还有它曾经为什么会熄灭。",
      unfinished:
        "设备按流程运转，展演顺利结束。你合上登记簿，却仍没有写出 17:31 的异常签名。对讲机里传来下一场活动的设备借还请求，你沉默了很久。",
    },
  },
  su: {
    no: "ROLE 04",
    name: "苏遥",
    short: "SU",
    title: "校园媒体记者 / 旧项目影像记录",
    tagline: "真相和伤害之间，能不能留一条路？",
    playStyle: "媒体视角 · 公开抉择 · 证词伦理",
    color: "#acd1de",
    publicStory:
      "你是校媒记者，擅长从一张照片里找到被忽略的细节。三年前，你拍下《未寄出的光》熄灭的全过程；今天，你又拍到了一只灰色设备箱穿过长廊。",
    privateStory: [
      "过去三年，你一直没有发布那段旧影像。因为画面里既有事故，也有唐予安在雨里独自拆灯的背影。你担心报道会替她定下一个无法反驳的身份：失败者。",
      "今天下午，沈越要求你删掉旧作对比。你拒绝以后，他威胁向学院投诉你滥用监控。你索性留下了所有备份，也把 17:41 的画面按原样保存。",
      "现在，专题稿只差最后一段。你可以在开展前发出“作品失踪”的新闻，也可以等所有人作出选择后，再决定这篇报道应该怎样写。",
    ],
    secret:
      "你有沈越逼唐予安放弃署名的完整录音备份。你没有立刻发布，是因为唐予安曾求你：至少等她把作品放回原位。",
    stance:
      "真相必须被记录，但报道不该替当事人决定结局。先理解每个人为什么说谎，再决定哪些话应该被公众听见。",
    psychology: {
      opening:
        "镜头从不负责解释。它只把一个人定格在最难看的那一秒，然后让所有人以为那一秒就是全部。",
      middle:
        "我开始不确定自己要发表的是调查，还是一篇替所有人判刑的故事。真相没有错，但我不能替他们决定怎样承受真相。",
      late:
        "如果报道必须有一个结尾，我希望它不是一个名字被划掉，而是更多名字被看见。也许这就是我拿起相机的原因。",
    },
    objective:
      "找到足以还原创作归属的影像与文字证据，并在结案时决定报道的公开方式。",
    perspectives: {
      studio: "照片里空匣没有移位，镜面干净得反常。你判断取走模块的人先擦过外壳，再取下它，整个过程更像一次秘密保存。",
      corridor: "17:41 的玻璃反光只有三秒。作为拍摄者，你知道那三秒足以引导所有指控，但不一定足以解释一个人的动机。",
      archive: "十三封信没有被带走，反而被整齐压平。你意识到对方想保护的不是秘密本身，而是这些秘密仍然属于写下它们的人。",
      courtyard: "你在这里按下最后一次快门时，设备箱其实已经折返回去。那张照片没有拍到结果，却拍到了一个人改变主意的瞬间。",
    },
    reactions: {
      tang: "她承认自己在保护作品，却没有说自己无辜。你开始明白，采访中最难的不是问出秘密，而是不把秘密变成唯一的标签。",
      xu: "许澄的愧疚是真的。可真相不能因为一个人终于难过，就自动补齐他错过的责任。",
      liang: "梁恪一直没有替自己开脱。他提供的时间线比任何人都精确，像是在替三年前的自己重写一次报告。",
    },
    tasks: [
      { id: "su-photo", label: "找到被压在台阶下的旧合影", type: "clue", target: "oldPhoto" },
      { id: "su-letters", label: "读完十三封信里的创作来源", type: "clue", target: "letters" },
      { id: "su-xu", label: "追问许澄是否知道署名被改", type: "question", target: "xuSignature" },
      { id: "su-ending", label: "以公开方式完成这场校园报道", type: "ending", target: "public" },
    ],
    preferredEnding: "public",
    endpoint: "镜头之后的署名",
    endings: {
      success:
        "报道在灯亮后发布。标题不是“谁偷走了作品”，而是“一场迟到了三年的联合署名”。你把旧影像和新的开场灯放在同一张封面里，读者第一次听见了十三封信的回声。",
      compromise:
        "你尊重唐予安，先把开灯权交给她。报道延后发布，序言只写了一句话：作品已经找回，完整故事仍在继续。",
      unfinished:
        "你发布了照片，却没有写出照片之外的等待。报道获得大量转发，评论都在寻找一个责任人。你关掉后台，第一次不确定点击量能否替真相反驳。",
    },
  },
};

const TUTORIAL_STEPS = [
  {
    eyebrow: "01 / CHOOSE YOUR ROLE",
    title: "你不是旁观者，而是故事里的一个人。",
    copy:
      "开始前先选择唐予安、许澄、梁恪或苏遥。四个人知道的事不同、相信的事不同，也会把同一处现场看成不同的问题。",
    note: "线下多人游玩时，可以各自打开页面选择不同角色，再围坐分享线索。单人玩家可以依次体验四个视角。",
  },
  {
    eyebrow: "02 / READ THE PRIVATE SCRIPT",
    title: "先读“你是谁知道什么”，再开始调查。",
    copy:
      "每名角色都有公开身份、私人往事、不能轻易公开的秘密、立场与四项个人任务。任务会随着勘察、追问和结案自动完成。",
    note: "点击“角色本”随时重读。扮演唐予安时，你会知道别人不知道的事；扮演其他人时，你需要通过证据接近它。",
  },
  {
    eyebrow: "03 / SEARCH & TALK",
    title: "现场找证物，人物对话里找分寸。",
    copy:
      "勘察四个场景可收集 8 件证物。询问其他角色时，先选问题，再听回答；每次回答后还可以观察一处微表情。",
    note: "至少读懂同一角色的两处微表情，会解锁其专属“人物心证”。人物立绘也会同步切换防备、紧绷、柔和或坚定的表情与动作。每个现场还可以情感朗读旁白、试听风声、电流、钟表或远处人声。",
  },
  {
    eyebrow: "04 / DEDUCE & RESTORE",
    title: "修正证词矛盾，再把时间线排回正确顺序。",
    copy:
      "收集 5 件证物后开放证词比对。找到矛盾后，用上下箭头复原作品离开工坊的路线，最后选择人物、动机、去向与关键证据。",
    note: "答错不会结束游戏，系统会给出与证据有关的提示。调查进度和选择会自动保存在浏览器里。",
  },
  {
    eyebrow: "05 / WRITE THE LAST LIGHT",
    title: "真相之后，还要决定这束光怎样亮。",
    copy:
      "结案后可选择让原作者亲手开灯，或向所有人公开完整档案。不同角色拥有不同个人任务与专属角色结局。",
    note: "四种角色视角拼在一起，才是《光屿回声》的完整故事。",
  },
];

const MICRO_POSES = {
  tangWhere: "guarded",
  tangCard: "guarded",
  tangConflict: "soft",
  tangKey: "tense",
  tangConsole: "firm",
  xuWhere: "guarded",
  xuCall: "tense",
  xuSignature: "soft",
  xuTeam: "soft",
  liangWhere: "guarded",
  liangEntry: "tense",
  liangKey: "soft",
  liangModule: "firm",
  suWhere: "guarded",
  suClash: "firm",
  suFootage: "tense",
  suVoice: "soft",
};

const POSE_LABELS = {
  neutral: "平静倾听",
  guarded: "克制防备",
  tense: "紧绷迟疑",
  soft: "卸下防备",
  firm: "坚定回应",
};

const PORTRAIT_PALETTES = {
  tang: { skin: "#d5a486", coat: "#35554e", accent: "#d7c574" },
  xu: { skin: "#d1a086", coat: "#244448", accent: "#9fc7bb" },
  liang: { skin: "#cba487", coat: "#435658", accent: "#d4bd82" },
  su: { skin: "#d9a38a", coat: "#67413f", accent: "#a7c7c0" },
};

const POSE_ACTIONS = {
  tang: {
    guarded:
      '<path d="M187 700q24-93 104-73l31 18-24 56-77 31Z" fill="#294740"/><path d="M414 703q-22-88-96-72l-34 22 24 55 74 27Z" fill="#294740"/><path d="M269 650q25 19 48 2l8 32-48 9Z" fill="#d5a486"/>',
    tense:
      '<path d="M362 627q36-14 73 17l27 69-39 15-55-65Z" fill="#294740"/><path d="M401 636l45-17 17 63-45 18Z" fill="#d5a486"/><rect x="437" y="605" width="81" height="13" rx="6" fill="#aab2ad" transform="rotate(-19 437 605)"/><circle cx="441" cy="621" r="14" fill="none" stroke="#7f8984" stroke-width="5"/>',
    soft:
      '<path d="M300 596q38-7 52 33l-16 62-40 9-20-57Z" fill="#d5a486"/><path d="M282 623q17-16 34 3l-4 64-30 3-16-50Z" fill="#35554e"/><path d="M310 652l22-39" stroke="#d7c574" stroke-width="7"/>',
    firm:
      '<path d="M168 699q25-74 94-65l32 20-14 54-77 24Z" fill="#294740"/><path d="M392 639q41-14 78 19l-10 54-51 18-44-54Z" fill="#294740"/><path d="M443 637l54-7 16 57-56 9Z" fill="#d5a486"/><rect x="474" y="602" width="60" height="55" rx="27" fill="#b9c5c0" opacity=".65"/>',
  },
  xu: {
    guarded:
      '<path d="M203 695q31-88 101-76l26 24-17 48-79 28Z" fill="#183338"/><path d="M404 699q-15-84-89-75l-28 23 15 48 75 26Z" fill="#183338"/><path d="M271 637q15-17 33 0l-2 54-29 3Z" fill="#d1a086"/>',
    tense:
      '<path d="M376 633q33-17 66 9l25 61-34 18-54-55Z" fill="#183338"/><rect x="416" y="578" width="55" height="92" rx="7" fill="#18272a" stroke="#819791" stroke-width="3"/><circle cx="444" cy="617" r="4" fill="#93aaa2"/><path d="M389 615q21-11 39 13l-10 69-34 4-17-45Z" fill="#d1a086"/>',
    soft:
      '<path d="M316 586q40 1 48 45l-23 62-46 3-7-63Z" fill="#d1a086"/><path d="M292 620q17-15 32 4l-1 57-30 2-13-46Z" fill="#244448"/><path d="M313 668q5-30 16-55" stroke="#9fc7bb" stroke-width="5"/>',
    firm:
      '<path d="M191 699q20-79 92-70l30 21-13 51-78 26Z" fill="#183338"/><path d="M370 620q42-6 72 23l-7 39-42-5-40-31Z" fill="#183338"/><path d="M421 640l59-33 22 49-57 35Z" fill="#d1a086"/><path d="M447 607l39 20" stroke="#aac6bc" stroke-width="5"/>',
  },
  liang: {
    guarded:
      '<path d="M188 693q24-84 103-72l28 23-15 50-81 26Z" fill="#314648"/><path d="M412 700q-19-87-94-74l-31 24 17 48 78 28Z" fill="#314648"/><path d="M270 638q22-9 38 9l-3 57-32 3Z" fill="#cba487"/>',
    tense:
      '<path d="M364 640q38-19 72 12l22 59-35 18-57-52Z" fill="#314648"/><path d="M404 615q26-9 45 24l-10 65-37 1-18-53Z" fill="#cba487"/><circle cx="431" cy="664" r="14" fill="none" stroke="#d4bd82" stroke-width="5"/><path d="M418 681l-25 35M442 681l32 29" stroke="#9fa59d" stroke-width="6"/>',
    soft:
      '<path d="M325 602q35-10 50 31l-13 62-42 7-22-58Z" fill="#cba487"/><path d="M301 624q20-13 36 8l-2 64-31 3-15-51Z" fill="#435658"/><path d="M327 600q-20 3-37 12" stroke="#293536" stroke-width="4"/><path d="M337 595q19 2 35 14" stroke="#293536" stroke-width="4"/>',
    firm:
      '<path d="M178 696q17-73 91-65l31 22-15 52-78 26Z" fill="#314648"/><path d="M371 631q39-13 70 18l10 49-47 21-49-43Z" fill="#314648"/><path d="M423 633l55-16 20 52-55 18Z" fill="#cba487"/><rect x="445" y="577" width="79" height="67" rx="4" fill="#ded4bf" transform="rotate(7 445 577)"/><path d="M459 598h46M456 617h52M453 635h44" stroke="#8c8b81" stroke-width="3"/>',
  },
  su: {
    guarded:
      '<path d="M191 691q22-76 96-69l27 22-15 48-76 25Z" fill="#513437"/><path d="M410 696q-16-82-90-72l-30 23 16 48 76 27Z" fill="#513437"/><path d="M277 642q21-8 37 10l-4 55-30 3Z" fill="#d9a38a"/>',
    tense:
      '<path d="M354 630q42-14 77 22l14 57-41 18-55-54Z" fill="#513437"/><path d="M398 614q24-8 43 22l-5 70-39 3-21-58Z" fill="#d9a38a"/><path d="M423 624l-13 76M438 625l-3 77" stroke="#182427" stroke-width="8"/>',
    soft:
      '<path d="M311 597q40-4 55 36l-15 64-46 8-20-60Z" fill="#d9a38a"/><path d="M286 623q21-15 38 4l-3 64-31 5-16-50Z" fill="#67413f"/><rect x="250" y="627" width="104" height="74" rx="10" fill="#1a282b" stroke="#87a29b" stroke-width="3" opacity=".7"/><circle cx="302" cy="664" r="24" fill="#263c3e" stroke="#9ab4ad" stroke-width="4"/>',
    firm:
      '<path d="M177 699q18-77 92-68l29 22-13 50-78 26Z" fill="#513437"/><path d="M369 626q38-11 67 20l10 48-45 20-50-42Z" fill="#513437"/><rect x="388" y="555" width="112" height="83" rx="11" fill="#1a282b" stroke="#9ab4ad" stroke-width="3" transform="rotate(-7 388 555)"/><circle cx="446" cy="593" r="28" fill="#263c3e" stroke="#a8c7c0" stroke-width="4"/><path d="M414 566h20v16h-20z" fill="#b7a26e"/>',
  },
};

function getMicroPose(questionId) {
  return MICRO_POSES[questionId] || "neutral";
}

function portraitExpressionMarkup(personId, pose = "neutral") {
  if (pose === "neutral" || !PORTRAIT_PALETTES[personId]) return "";
  const palette = PORTRAIT_PALETTES[personId];
  const brows = {
    guarded:
      '<path d="M233 276q19-8 39 1M329 277q20-9 40 0" stroke="#5f3933" stroke-width="7" stroke-linecap="round" fill="none"/>',
    tense:
      '<path d="M231 280q22-4 40 9M330 289q18-14 40-10" stroke="#55342f" stroke-width="7" stroke-linecap="round" fill="none"/>',
    soft:
      '<path d="M232 281q21 2 40 10M330 291q18-9 39-11" stroke="#6c4138" stroke-width="6" stroke-linecap="round" fill="none"/>',
    firm:
      '<path d="M232 280q22-2 41 2M329 282q19-4 40 0" stroke="#57362f" stroke-width="7" stroke-linecap="round" fill="none"/>',
  }[pose];
  const eyes = {
    guarded:
      '<path d="M238 306q20-9 39 0-18 12-39 0ZM335 306q19-9 37 0-17 12-37 0Z" fill="#203033"/><circle cx="282" cy="305" r="2.7" fill="#efe7d3"/><circle cx="354" cy="305" r="2.7" fill="#efe7d3"/>',
    tense:
      '<path d="M238 307q18-5 38 1-18 8-38-1ZM336 308q18-6 36 0-17 8-36 0Z" fill="#1d2b2d"/><path d="M238 307q18-2 38 1M336 308q18-3 36 0" stroke="#65413a" stroke-width="2"/>',
    soft:
      '<path d="M238 310q20-9 39 1-19 10-39-1ZM335 311q18-10 37-1-18 11-37 1Z" fill="#203033"/><path d="M240 314q18 7 35 0M339 315q16 6 31 0" stroke="#82564b" stroke-width="2"/>',
    firm:
      '<path d="M237 304q20-7 39 0-19 9-39 0ZM336 304q18-7 36 0-18 9-36 0Z" fill="#1d2b2d"/><circle cx="281" cy="304" r="3" fill="#eee6d2"/><circle cx="353" cy="304" r="3" fill="#eee6d2"/>',
  }[pose];
  const mouth = {
    guarded: '<path d="M266 398q34-3 68 0" stroke="#8b4d4b" stroke-width="4" stroke-linecap="round"/>',
    tense: '<path d="M269 398q31 7 64-2" stroke="#794240" stroke-width="4" stroke-linecap="round"/>',
    soft: '<path d="M264 397q35 17 70-2" stroke="#8f4c4e" stroke-width="4" stroke-linecap="round" fill="none"/>',
    firm: '<path d="M265 397q35-5 69 1" stroke="#793f40" stroke-width="4" stroke-linecap="round"/>',
  }[pose];
  const extra =
    pose === "soft"
      ? '<ellipse cx="231" cy="360" rx="21" ry="8" fill="#c97c76" opacity=".16"/><ellipse cx="373" cy="360" rx="20" ry="8" fill="#c97c76" opacity=".16"/>'
      : pose === "tense"
        ? '<path d="M291 430q8 10 19 1" stroke="#a27a69" stroke-width="2" opacity=".45"/>'
        : "";
  const glasses =
    personId === "liang"
      ? '<g fill="none" stroke="#293536" stroke-width="4"><rect x="228" y="293" width="65" height="36" rx="13"/><rect x="326" y="294" width="62" height="35" rx="13"/><path d="M293 307h33"/></g>'
      : "";
  return `
    <svg class="portrait-expression" viewBox="0 0 600 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <ellipse cx="300" cy="350" rx="84" ry="102" fill="${palette.skin}" opacity=".96"/>
      ${brows}${eyes}${glasses}${mouth}${extra}
      ${POSE_ACTIONS[personId]?.[pose] || ""}
    </svg>
  `;
}

const defaultState = {
  started: false,
  role: "",
  rolesCompleted: [],
  section: "overview",
  clues: [],
  discoveredScenes: [],
  conversations: [],
  microReads: [],
  npcReads: [],
  endingChoice: "",
  activeQuestion: "",
  contradictionSolved: false,
  timelineSolved: false,
  timelineOrder: ["lanyard", "test", "key", "archive", "remove"],
  solved: false,
  attempts: 0,
  hintCount: 0,
  sound: false,
  finalSelection: {
    killer: "",
    motive: "",
    method: "",
    evidence: "",
  },
};

let state = loadState();
let toastTimer;
let audioContext;

const landing = document.querySelector("#landing");
const gameShell = document.querySelector("#game-shell");
const mainContent = document.querySelector("#main-content");
const modalLayer = document.querySelector("#modal-layer");
const modalPanel = document.querySelector("#modal-panel");

function cloneDefaults() {
  return JSON.parse(JSON.stringify(defaultState));
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved || typeof saved !== "object") return cloneDefaults();
    return {
      ...cloneDefaults(),
      ...saved,
      finalSelection: { ...defaultState.finalSelection, ...(saved.finalSelection || {}) },
      timelineOrder:
        Array.isArray(saved.timelineOrder) && saved.timelineOrder.length === 5
          ? saved.timelineOrder
          : [...defaultState.timelineOrder],
      clues: Array.isArray(saved.clues) ? saved.clues : [],
      discoveredScenes: Array.isArray(saved.discoveredScenes) ? saved.discoveredScenes : [],
      conversations: Array.isArray(saved.conversations) ? saved.conversations : [],
      microReads: Array.isArray(saved.microReads) ? saved.microReads : [],
      npcReads: Array.isArray(saved.npcReads) ? saved.npcReads : [],
      rolesCompleted: Array.isArray(saved.rolesCompleted) ? saved.rolesCompleted : [],
    };
  } catch {
    return cloneDefaults();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // The game still works if storage is unavailable.
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProgress() {
  const cluePart = (state.clues.length / Object.keys(CASE_DATA.clues).length) * 55;
  const contradictionPart = state.contradictionSolved ? 15 : 0;
  const timelinePart = state.timelineSolved ? 15 : 0;
  const solvedPart = state.solved ? 15 : 0;
  return Math.round(cluePart + contradictionPart + timelinePart + solvedPart);
}

function progressMessage() {
  if (state.solved) return "创作档案已补完。完整故事仍可在推演页重读。";
  if (state.timelineSolved) return "时间线已复原，可以为这场展演写下结论。";
  if (state.contradictionSolved) return "证词已有裂口，继续校准行动顺序。";
  if (state.clues.length >= 5) return "核心证物接近完整，去推演室核对证词。";
  if (state.clues.length >= 2) return "证物开始互相指向，别漏掉任何场景。";
  return "先从试灯现场开始。";
}

function getCurrentRole() {
  return ROLE_DATA[state.role] || null;
}

function isRoleTaskComplete(task) {
  if (!task) return false;
  if (task.type === "clue") return state.clues.includes(task.target);
  if (task.type === "scene") return state.discoveredScenes.includes(task.target);
  if (task.type === "question") return state.conversations.includes(task.target);
  if (task.type === "micro") {
    return (
      state.microReads.filter((id) =>
        CASE_DATA.suspects
          .find((person) => person.id === task.target)
          ?.questions.some((question) => question.id === id)
      ).length >= Number(task.count || 2)
    );
  }
  if (task.type === "timeline") return state.timelineSolved;
  if (task.type === "ending") return state.endingChoice === task.target;
  return false;
}

function getRoleTaskStats(role = getCurrentRole()) {
  if (!role) return { complete: 0, total: 0, next: "" };
  const complete = role.tasks.filter(isRoleTaskComplete).length;
  const next = role.tasks.find((task) => !isRoleTaskComplete(task))?.label || "个人任务已全部完成";
  return { complete, total: role.tasks.length, next };
}

function roleContextMarkup() {
  const role = getCurrentRole();
  if (!role) return "";
  const stats = getRoleTaskStats(role);
  const progress = getProgress();
  const psychStage = progress < 25 ? "opening" : progress < 72 ? "middle" : "late";
  const psychology = role.psychology[psychStage];
  return `
    <section class="role-context">
      <div class="role-context-mark">${role.short}<small>${role.no}</small></div>
      <div class="role-context-copy">
        <span>当前角色 / YOUR ROLE</span>
        <h3>${role.name}<small>${role.title}</small></h3>
        <p>${role.tagline}</p>
      </div>
      <div class="role-context-quest">
        <span>个人任务 ${stats.complete}/${stats.total}</span>
        <b>${stats.next}</b>
        <i><em style="width:${stats.total ? (stats.complete / stats.total) * 100 : 0}%"></em></i>
      </div>
      <button type="button" data-action="open-role-dossier">打开角色本</button>
    </section>
    <blockquote class="role-psychology">
      <span>INNER MONOLOGUE / ${role.name}的心理活动</span>
      <p>${psychology}</p>
    </blockquote>
  `;
}

function updateChrome() {
  document.querySelector("#clue-counter").textContent =
    `${state.clues.length}/${Object.keys(CASE_DATA.clues).length}`;
  const progress = getProgress();
  document.querySelector("#progress-value").textContent = `${progress}%`;
  document.querySelector("#progress-bar").style.width = `${progress}%`;
  const track = document.querySelector(".progress-track");
  track.setAttribute("aria-valuenow", String(progress));
  document.querySelector("#progress-copy").textContent = progressMessage();

  document.querySelectorAll("[data-nav]").forEach((button) => {
    button.classList.toggle("active", button.dataset.nav === state.section);
  });

  document.querySelectorAll("#sound-toggle, #landing-sound").forEach((button) => {
    button.setAttribute("aria-pressed", String(state.sound));
    if (button.id === "landing-sound") {
      button.textContent = state.sound ? "声音 ON" : "声音 OFF";
    }
  });
}

function render() {
  updateChrome();
  if (!state.started) return;
  const renderers = {
    overview: renderOverview,
    scenes: renderScenes,
    people: renderPeople,
    clues: renderClues,
    deduction: renderDeduction,
    result: renderResult,
  };
  mainContent.innerHTML = (renderers[state.section] || renderOverview)();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function screenHead(kicker, title, index) {
  return `
    <div class="screen-head">
      <div>
        <p class="screen-kicker">${kicker}</p>
        <h2>${title}</h2>
      </div>
      <span class="screen-index">${index}</span>
    </div>
  `;
}

function renderOverview() {
  const cluesDone = state.clues.length > 0;
  const contradictionReady = state.clues.length >= 5;
  const finalReady = state.contradictionSolved && state.timelineSolved;
  return `
    ${screenHead("STORY BRIEF / 剧情档案", "开演前四十三分钟，作品失去了心脏", "01")}
    <div class="overview-narration">
      <span>NARRATOR / 开场旁白</span>
      <p>${NARRATIVE_LAYERS.overviewNarration}</p>
      <button type="button" data-action="read-overview">沉浸朗读开场旁白</button>
    </div>
    ${roleContextMarkup()}
    <div class="overview-grid">
      <article class="case-brief">
        <span class="brief-label">创作事件记录 · 仅供调查组使用</span>
        <h3>最后一次试灯只亮了十二秒，<br />主展装置《光屿》的核心模块不见了。</h3>
        <p>
          10 月 26 日 17:47，距离“光屿计划”正式开展还有四十三分钟。
          原初书院的光影工坊里，环形灯墙只闪了十二秒，便重新回到待机。
          装载作品记忆的核心模块已经离线，四个人却都给出了看似合理的解释。<br /><br />
          宣传稿已经发出，观众正在赶来。项目发起人沈越坚持把事件定性为
          <span class="brief-highlight">“恶意破坏”</span>，但一张被改写的署名单让事情变得复杂。
          现在，由你还原作品消失的路线，也决定这场展演应该以谁的名字亮起。
        </p>
        <div class="brief-footer">
          <span><b>17:47:16</b>试灯中断</span>
          <span><b>光影工坊</b>第一现场</span>
          <span><b>4 名</b>重点关系人</span>
          <span><b>43 分</b>距离开展</span>
        </div>
      </article>
      <aside class="victim-file">
        <div class="victim-portrait missing-art" aria-label="《光屿》的作品档案卡">
          <span>光</span>
        </div>
        <small>MISSING WORK / CORE MODULE</small>
        <h3>《${CASE_DATA.work.name}》</h3>
        <p class="victim-role">${CASE_DATA.work.subtitle}</p>
        <div class="victim-facts">
          <div><span>作品性质</span><b>${CASE_DATA.work.creator}</b></div>
          <div><span>最后位置</span><b>${CASE_DATA.work.location}</b></div>
          <div><span>技术主创</span><b>唐予安 / 许澄</b></div>
          <div><span>预计开展</span><b>${CASE_DATA.work.opened}</b></div>
        </div>
      </aside>
    </div>
    <div class="mission-strip">
      <div class="mission-title">
        <small>YOUR TASKS / 今日任务</small>
        <b>在档案中留下<br />能被证据支持的判断。</b>
      </div>
      <div class="mission-item ${cluesDone ? "done" : ""}">
        <small>01 / SEARCH</small>
        <strong>勘察全部现场</strong>
      </div>
      <div class="mission-item ${contradictionReady ? "done" : ""}">
        <small>02 / VERIFY</small>
        <strong>锁定证言矛盾</strong>
      </div>
      <div class="mission-item ${finalReady ? "done" : ""}">
        <small>03 / RESTORE</small>
        <strong>补完创作真相</strong>
      </div>
    </div>
    <section class="story-lore">
      <div class="story-lore-image" style="background-image:url('./assets/campus-bridge.jpg')">
        <span>ARCHIVE / 2022</span>
      </div>
      <div class="story-lore-copy">
        <p class="screen-kicker">STORY BACKGROUND / 故事前史</p>
        <h3>三年前，灯光只亮了六分钟。</h3>
        <p>
          四个年轻人曾让一场不被批准的作品短暂亮起。失败之后，作品失去署名，
          参与者失去推荐资格，只有十三封没有寄出的信被留在旧展册里。
          今年，《光屿》似乎要把那段光带回校园，却也让同一个名字之争重新开始。
        </p>
        <div class="lore-pills">
          <span>118 盏灯</span><span>6 分钟</span><span>13 封信</span><span>4 个未完成的约定</span>
        </div>
      </div>
      <button type="button" class="lore-action" data-action="open-lore">
        翻开旧档 <span aria-hidden="true">↗</span>
      </button>
    </section>
  `;
}

function renderScenes() {
  const cards = CASE_DATA.scenes
    .map((scene) => {
      const searched = state.discoveredScenes.includes(scene.id);
      return `
        <article
          class="scene-card ${searched ? "searched" : ""}"
          data-index="${scene.index}"
          style="--scene-image:url('${scene.image}')"
        >
          <div class="scene-map"></div>
          <span class="scene-location">${scene.location}</span>
          <h3>${scene.title}</h3>
          <p>${scene.summary}</p>
          <div class="scene-status"><i></i>${searched ? "现场已勘察" : "等待勘察"}</div>
          <button class="scene-action" type="button" data-action="search-scene" data-id="${scene.id}">
            ${searched ? "复查现场" : "进入现场"}
          </button>
        </article>
      `;
    })
    .join("");

  return `
    ${screenHead("SCENE INVESTIGATION / 场景勘察", "沿着作品留下的路线走一遍", "02")}
    <div class="scene-grid">${cards}</div>
  `;
}

function renderPeople() {
  const role = getCurrentRole();
  const roleStats = getRoleTaskStats(role);
  const cards = CASE_DATA.suspects
    .filter((person) => person.id !== state.role)
    .map((person) => {
      const asked = person.questions.filter((question) =>
        state.conversations.includes(question.id)
      ).length;
      const microCount = person.questions.filter((question) =>
        state.microReads.includes(question.id)
      ).length;
      return `
        <article class="person-card">
          <div class="person-portrait has-image">
            <img src="./assets/portraits/${person.id}.svg" alt="${person.name}的角色肖像" />
            <span>${person.no}</span>
          </div>
          <div class="person-copy">
            <span class="person-no">${person.role}</span>
            <h3>${person.name}</h3>
            <p>${person.bio}</p>
            <div class="person-alibi">${person.alibi}</div>
            ${
              asked
                ? `
                  <div class="person-emotion">
                    <span>人物侧写</span>
                    <b>${microCount >= 2 ? "心证已解锁" : `微表情 ${microCount}/2`}</b>
                    <i><em style="width:${Math.min(100, microCount * 50)}%"></em></i>
                  </div>
                `
                : ""
            }
            <button class="person-action" type="button" data-action="open-person" data-id="${person.id}">
              进入询问 <span aria-hidden="true">→</span>
            </button>
          </div>
          ${asked ? `<span class="person-talked">${asked} 条证词</span>` : ""}
        </article>
      `;
    })
    .join("");
  const roleCard = role
    ? `
      <article class="my-role-card">
        <div class="my-role-monogram">
          <img src="./assets/portraits/${state.role}.svg" alt="${role.name}的角色肖像" />
          <span>${role.short}</span>
        </div>
        <div>
          <span>你的角色本 / PRIVATE SCRIPT</span>
          <h3>${role.name}</h3>
          <p>${role.tagline}</p>
          <div class="my-role-progress">
            <b>个人任务 ${roleStats.complete}/${roleStats.total}</b>
            <small>${roleStats.next}</small>
          </div>
          <button type="button" data-action="open-role-dossier">重读角色本</button>
        </div>
      </article>
    `
    : "";

  return `
    ${screenHead("PEOPLE & STORIES / 人物访谈", "从你的立场，走进另外三个人", "03")}
    ${roleCard}
    <p class="section-label">OTHER CHARACTERS / 其他角色</p>
    <div class="people-grid">${cards}</div>
    <p class="section-label">NPC & WITNESSES / 场外证词</p>
    <div class="npc-grid">
      ${NARRATIVE_LAYERS.npcs
        .map(
          (npc) => `
            <button class="npc-card ${state.npcReads.includes(npc.id) ? "read" : ""}" type="button" data-action="open-npc" data-id="${npc.id}">
              <img src="${npc.image}" alt="${npc.name}的人物肖像" />
              <span>${npc.location}</span>
              <b>${npc.name}</b>
              <small>${npc.title}</small>
              <p>${npc.quote}</p>
              <i>${state.npcReads.includes(npc.id) ? "证词已记录" : "听取证词"} ↗</i>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderClues() {
  if (!state.clues.length) {
    return `
      ${screenHead("EVIDENCE BOARD / 证物柜", "证物不会主动开口", "04")}
      <div class="empty-state">
        <div>
          <b>证物柜还是空的</b>
          <p>前往“现场”并完成至少一次勘察，找到的线索会自动归档在这里。</p>
        </div>
      </div>
    `;
  }

  const cards = state.clues
    .map((id, index) => {
      const clue = CASE_DATA.clues[id];
      if (!clue) return "";
      return `
        <button class="clue-card" type="button" data-action="open-clue" data-id="${id}">
          <span class="clue-type">${clue.type}</span>
          <h3>${clue.title}</h3>
          <p>${clue.short}</p>
          <footer><span>E-${String(index + 1).padStart(2, "0")}</span><span>查看全文 ↗</span></footer>
        </button>
      `;
    })
    .join("");

  return `
    ${screenHead("EVIDENCE BOARD / 证物柜", "线索正在拼出作品消失的路径", "04")}
    <div class="clue-grid">${cards}</div>
  `;
}

function renderDeduction() {
  const contradictionReady = state.clues.length >= 5;
  const timelineReady = state.contradictionSolved;
  const finalReady = state.contradictionSolved && state.timelineSolved;
  return `
    ${screenHead("DEDUCTION ROOM / 推演室", "把作品消失的路线重新点亮", "05")}
    <div class="deduction-stack">
      <section class="deduction-panel ${contradictionReady ? "" : "locked"}">
        <div class="panel-head">
          <h3>01 · 证言矛盾</h3>
          <small>${state.contradictionSolved ? "LOCKED IN" : "需 5 件证物"}</small>
        </div>
        ${
          contradictionReady
            ? `
              <p class="inline-note">谁的陈述与“核心模块离线后的必经路线”发生了直接冲突？</p>
              <div class="deduction-choices">
                ${CASE_DATA.contradictionOptions
                  .map(
                    (option) => `
                      <button
                        type="button"
                        class="choice-button ${state.contradictionSolved && option.id === "tang" ? "correct" : ""}"
                        data-action="solve-contradiction"
                        data-id="${option.id}"
                        ${state.contradictionSolved ? "disabled" : ""}
                      >${option.text}</button>
                    `
                  )
                  .join("")}
              </div>
              ${
                state.contradictionSolved
                  ? '<p class="inline-note" style="color:var(--mint)">已确认：唐予安关于工作卡去向的证词无法成立。继续复原时间线。</p>'
                  : ""
              }
            `
            : '<p class="locked-copy">至少收集 5 件证物后，推演室的证词比对功能才会解锁。</p>'
        }
      </section>

      <section class="deduction-panel ${timelineReady ? "" : "locked"}">
        <div class="panel-head">
          <h3>02 · 行动时间线</h3>
          <small>${state.timelineSolved ? "SEQUENCE VERIFIED" : timelineReady ? "正在排序" : "等待证言核验"}</small>
        </div>
        ${
          timelineReady
            ? `
              <p class="inline-note">使用上下箭头重排五个事件，从最早发生的事件开始。</p>
              <ol class="timeline-list">
                ${state.timelineOrder
                  .map((id, index, order) => {
                    const event = CASE_DATA.timeline.find((item) => item.id === id);
                    return `
                      <li class="timeline-item ${state.timelineSolved ? "solved" : ""}">
                        <span>${event.time}</span>
                        <p>${event.text}</p>
                        <span class="timeline-controls">
                          <button type="button" data-action="move-timeline" data-id="${id}" data-dir="-1" aria-label="上移${event.text}" ${index === 0 || state.timelineSolved ? "disabled" : ""}>↑</button>
                          <button type="button" data-action="move-timeline" data-id="${id}" data-dir="1" aria-label="下移${event.text}" ${index === order.length - 1 || state.timelineSolved ? "disabled" : ""}>↓</button>
                        </span>
                      </li>
                    `;
                  })
                  .join("")}
              </ol>
              <button class="secondary-action" type="button" data-action="check-timeline" ${state.timelineSolved ? "disabled" : ""}>
                ${state.timelineSolved ? "时间线已确认" : "核对行动顺序"}
              </button>
            `
            : '<p class="locked-copy">先完成证言矛盾检查，再进入行动顺序复原。</p>'
        }
      </section>

      <section class="deduction-panel ${finalReady ? "" : "locked"}">
        <div class="panel-head">
          <h3>03 · 创作真相</h3>
          <small>${state.solved ? "STORY RESTORED" : finalReady ? "READY TO RESTORE" : "等待前序推演"}</small>
        </div>
        ${
          finalReady
            ? renderAccusationForm()
            : '<p class="locked-copy">依次完成证言核验与时间线复原后，才能写下这场创作事件的完整结论。</p>'
        }
      </section>
    </div>
  `;
}

function renderAccusationForm() {
  if (state.solved) {
    return `
      <p class="inline-note">创作档案已补完。可以重新查看完整真相与展演复盘。</p>
      <button class="secondary-action" type="button" data-action="show-result">查看创作复盘</button>
    `;
  }

  return `
    <div class="accusation-grid">
      ${selectField("killer", "谁移走了核心模块？", CASE_DATA.final.killers, "选择一名关系人")}
      ${selectField("motive", "她为什么要这样做？", CASE_DATA.final.motives, "选择真实动机")}
      ${selectField("method", "核心模块在哪里？", CASE_DATA.final.methods, "选择模块去向")}
      ${selectField("evidence", "哪组证据最关键？", CASE_DATA.final.evidence, "选择关键证据")}
    </div>
    <button class="accusation-submit" type="button" data-action="submit-accusation">
      <span>补完创作真相</span><span aria-hidden="true">→</span>
    </button>
    <p class="error-note" id="accusation-error" role="alert"></p>
  `;
}

function selectField(name, label, options, placeholder) {
  const selected = state.finalSelection[name];
  return `
    <div class="field">
      <label for="field-${name}">${label}</label>
      <select id="field-${name}" data-final-field="${name}">
        <option value="">${placeholder}</option>
        ${options
          .map(
            (option) =>
              `<option value="${option.value}" ${selected === option.value ? "selected" : ""}>${option.text}</option>`
          )
          .join("")}
      </select>
    </div>
  `;
}

function renderResult() {
  const role = getCurrentRole();
  const roleStats = getRoleTaskStats(role);
  const roleStoryTasks = role?.tasks.filter((task) => task.type !== "ending") || [];
  const roleStoryComplete = roleStoryTasks.every(isRoleTaskComplete);
  const roleOutcome = !state.endingChoice
    ? ""
    : roleStats.complete === roleStats.total
      ? "success"
      : roleStoryComplete
        ? "compromise"
        : "unfinished";
  const rank = state.attempts === 0 ? "S" : state.attempts <= 2 ? "A" : "B";
  const chosenEnding = NARRATIVE_LAYERS.endings[state.endingChoice];
  const rankLine =
    rank === "S"
      ? "S · 看见光的人"
      : rank === "A"
        ? "A · 长廊记录员"
        : "B · 故事补完者";

  return `
    <article class="result-screen" data-rank="${rank}">
      <div class="result-topline">
        <span>创作复盘档案 / 2026-10</span>
        <span>本次角色：${role ? role.name : "临时记录员"}</span>
      </div>
      <span class="result-rank">${rankLine}</span>
      <h2>作品等待的，从来不是掌声；<br />而是每个名字都被看见。</h2>
      <p class="result-lead">
        核心模块没有被销毁。唐予安把作品从试灯现场带走，
        是为了阻止它以被改写的署名正式亮相。她做了一个错误而激烈的选择，
        也留下了一条足以把所有人重新带回作品面前的路线。
      </p>
      <div class="truth-grid">
        <div><span>移走模块</span><b>唐予安</b></div>
        <div><span>模块去向</span><b>资料室 207 · 防潮柜</b></div>
        <div><span>真实动机</span><b>阻止核心创作署名被改写</b></div>
      </div>
      <div class="reveal-story">
        <p>
          17:31，唐予安临摹沈越的签名，从梁恪处领走控制台检修钥匙。
          17:39，她用钥匙打开核心模块匣，将记录着全部灯光记忆的模块完整取下。
        </p>
        <p>
          17:41，她推着灰色设备箱穿过时光长廊。17:44，资料室 207 的门被她的工作卡打开。
          她把核心模块连上旧电脑，备份原始署名与创作日志，再将它锁进防潮柜。
        </p>
        <p>
          17:47，没有核心模块的灯墙只运行了十二秒。梁恪在资料室看见胶带，
          却因为自己的登记疏漏选择沉默；许澄以为一封措辞激烈的消息能把署名问题逼上桌面；
          苏遥握着证据，却不愿让一张截图替朋友说完所有话。
        </p>
        <p>
          最终，团队在防潮柜里找回了模块。展演晚了十二分钟开始，
          并第一次在开场字幕里完整写下《未寄出的光》与四位创作者的名字。
          <strong>《光屿》仍然亮了。它不再属于一个人，而终于成为了四个人的回声。</strong>
        </p>
      </div>
      <section class="ending-choice">
        <div class="ending-choice-head">
          <div>
            <span>LAST LIGHT / 最后一束光</span>
            <h3>真相已经被找回，结尾仍由你落笔。</h3>
          </div>
          <p>18:29，观众已经入场。你准备让这场迟到了三年的展演，以哪一种方式重新开始？</p>
        </div>
        <div class="ending-options">
          <button
            type="button"
            data-action="choose-ending"
            data-id="creator"
            aria-pressed="${state.endingChoice === "creator"}"
            class="${state.endingChoice === "creator" ? "selected" : ""}"
          >
            <span>ENDING A</span>
            <b>让原作者亲手开灯</b>
            <small>先把作品的解释权交还给创作者。</small>
          </button>
          <button
            type="button"
            data-action="choose-ending"
            data-id="public"
            aria-pressed="${state.endingChoice === "public"}"
            class="${state.endingChoice === "public" ? "selected" : ""}"
          >
            <span>ENDING B</span>
            <b>让所有人看见完整档案</b>
            <small>把创作争议与修复过程一起向公众展开。</small>
          </button>
        </div>
        ${
          chosenEnding
            ? `
              <div class="ending-epilogue" aria-live="polite">
                <span>ENDING SELECTED / ${chosenEnding.title}</span>
                <p>${chosenEnding.text}</p>
              </div>
            `
            : ""
        }
      </section>
      ${
        role && roleOutcome
          ? `
            <section class="role-finale">
              <div class="role-finale-head">
                <span>ROLE ENDING / ${role.endpoint}</span>
                <b>个人任务 ${roleStats.complete} / ${roleStats.total}</b>
              </div>
              <h3>${role.name}的结局</h3>
              <p>${role.endings[roleOutcome]}</p>
              <small>
                ${roleOutcome === "success"
                  ? "你的全部个人任务与选择一致，角色真结局已解锁。"
                  : roleOutcome === "compromise"
                    ? "你完成了角色的核心任务，但最终选择与角色最初的立场不同。另一种结局已经写入档案。"
                    : "你还原了作品真相，但仍有个人任务没有完成。换一个视角或重新调查，会看到另一段角色故事。"}
              </small>
            </section>
          `
          : ""
      }
      <div class="result-actions">
        <button type="button" data-action="read-again">重读作品路线</button>
        <button type="button" data-action="review-evidence">补看未读证物</button>
        <button type="button" data-action="switch-role">体验其他角色</button>
        <button type="button" data-action="reset-game">重新调查</button>
      </div>
    </article>
  `;
}

function openModal(content) {
  modalPanel.innerHTML = `
    <button class="modal-close" type="button" data-close-modal aria-label="关闭窗口">CLOSE ×</button>
    <div class="modal-body">${content}</div>
  `;
  modalLayer.hidden = false;
  modalPanel.scrollTop = 0;
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => {
    modalPanel.querySelector("button, select, a")?.focus();
    modalPanel.scrollTop = 0;
  });
}

function closeModal() {
  stopEnvironmentSound();
  narrationSessionId += 1;
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
  modalLayer.hidden = true;
  modalPanel.innerHTML = "";
  document.body.style.overflow = "";
}

function openRoleSelection(mode = "new") {
  const cards = Object.entries(ROLE_DATA)
    .map(
      ([id, role]) => `
        <button
          type="button"
          class="role-select-card"
          data-action="select-role"
          data-id="${id}"
        >
          <div class="role-card-portrait">
            <img src="./assets/portraits/${id}.svg" alt="${role.name}的角色肖像" />
          </div>
          <div class="role-card-copy">
            <span class="role-card-top">
              <b>${role.no}</b>
              ${state.rolesCompleted.includes(id) ? "<em>已体验</em>" : ""}
            </span>
            <strong>${role.name}</strong>
            <small>${role.title}</small>
            <p>${role.tagline}</p>
            <i>${role.playStyle}</i>
          </div>
          <span class="role-card-enter">选择此角色 <b aria-hidden="true">↗</b></span>
        </button>
      `
    )
    .join("");

  openModal(`
    <p class="modal-kicker">PLAYABLE SCRIPT / 角色剧本</p>
    <h2>先决定你在这场故事里是谁。</h2>
    <p class="modal-narrative">
      四名角色拥有不同的私人往事、秘密、立场、场景感知和个人任务。
      同一件证物，在不同角色眼里可能意味着完全不同的选择。
    </p>
    <div class="role-select-grid">${cards}</div>
    <div class="role-select-footer">
      <p>
        ${mode === "switch" ? "选择新角色会开启一份新的调查进度，已完成的角色会保留记录。" : "线下多人游玩时，每人可以选择不同角色，再通过发言与展示证据推进故事。"}
      </p>
      <button type="button" data-action="open-tutorial">第一次玩？打开新手教程</button>
    </div>
  `);
}

function roleTasksMarkup(role) {
  return role.tasks
    .map((task, index) => {
      const complete = isRoleTaskComplete(task);
      return `
        <li class="${complete ? "complete" : ""}">
          <span>${complete ? "✓" : String(index + 1).padStart(2, "0")}</span>
          <p>${task.label}</p>
          <small>${complete ? "已完成" : "待完成"}</small>
        </li>
      `;
    })
    .join("");
}

function openRoleDossier(initial = false) {
  const role = getCurrentRole();
  if (!role) {
    openRoleSelection();
    return;
  }
  const stats = getRoleTaskStats(role);
  const currentProgress = getProgress();
  const rolePose = currentProgress < 25 ? "guarded" : currentProgress < 72 ? "soft" : "firm";
  openModal(`
    <div class="role-script-head">
      <div class="role-script-mark" style="--role-accent:${role.color}">
        <img src="./assets/portraits/${state.role}.svg" alt="${role.name}的角色肖像" />
        ${portraitExpressionMarkup(state.role, rolePose)}
        <b>${role.short}</b>
        <span>${role.no}</span>
      </div>
      <div>
        <p class="modal-kicker">${initial ? "PRIVATE SCRIPT / 你的角色本" : "YOUR PERSPECTIVE / 角色档案"}</p>
        <h2>${role.name}</h2>
        <p>${role.title}</p>
      </div>
    </div>
    <blockquote class="role-tagline">${role.tagline}</blockquote>
    <div class="role-script-columns">
      <section>
        <span>01 / 公开身份</span>
        <p>${role.publicStory}</p>
      </section>
      <section>
        <span>02 / 你的秘密</span>
        <p>${role.secret}</p>
      </section>
    </div>
    <div class="role-private-story">
      <span>03 / 只有你知道的往事</span>
      ${role.privateStory.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <div class="role-stance">
      <span>YOUR STANCE / 你的立场</span>
      <p>${role.stance}</p>
    </div>
    <div class="role-objective">
      <span>04 / 本场个人目标</span>
      <p>${role.objective}</p>
    </div>
    <div class="role-task-head">
      <span>05 / 独立任务剧情</span>
      <b>${stats.complete} / ${stats.total}</b>
    </div>
    <ol class="role-task-list">${roleTasksMarkup(role)}</ol>
    <p class="role-script-note">
      任务不会限制你的最终选择。完成个人任务可以解锁角色专属结局；
      即使没有全部完成，也可以继续调查并还原作品真相。
    </p>
    <div class="modal-actions">
      <button class="primary" type="button" data-action="${initial ? "role-dossier-enter" : "open-tutorial"}">
        ${initial ? "合上角色本，进入 17:47" : "查看新手教程"}
      </button>
      <button type="button" data-action="open-image-studio">生成 AI 人物立绘</button>
      <button type="button" data-close-modal>关闭</button>
    </div>
  `);
}

let tutorialStep = 0;

function openTutorial(step = 0) {
  tutorialStep = Math.max(0, Math.min(TUTORIAL_STEPS.length - 1, Number(step) || 0));
  const item = TUTORIAL_STEPS[tutorialStep];
  openModal(`
    <div class="tutorial-window">
      <div class="tutorial-topline">
        <span>BEGINNER GUIDE / 新手教程</span>
        <b>${String(tutorialStep + 1).padStart(2, "0")} / ${String(TUTORIAL_STEPS.length).padStart(2, "0")}</b>
      </div>
      <div class="tutorial-stage">
        <span>${item.eyebrow}</span>
        <h2>${item.title}</h2>
        <p>${item.copy}</p>
        <div class="tutorial-note">${item.note}</div>
      </div>
      <div class="tutorial-dots" aria-label="教程进度">
        ${TUTORIAL_STEPS.map(
          (_, index) =>
            `<i class="${index === tutorialStep ? "active" : ""}" aria-hidden="true"></i>`
        ).join("")}
      </div>
      <div class="tutorial-actions">
        <button
          type="button"
          data-action="tutorial-step"
          data-id="${tutorialStep - 1}"
          ${tutorialStep === 0 ? "disabled" : ""}
        >上一步</button>
        ${
          tutorialStep < TUTORIAL_STEPS.length - 1
            ? `<button class="primary" type="button" data-action="tutorial-step" data-id="${tutorialStep + 1}">下一步</button>`
            : `<button class="primary" type="button" data-action="tutorial-finish">选择我的角色</button>`
        }
      </div>
    </div>
  `);
}

function renderImageStudio(status) {
  const roleId = state.role || "tang";
  const gallery = status.images || [];
  openModal(`
    <div class="image-studio">
      <div class="image-studio-head">
        <div>
          <p class="modal-kicker">AI PORTRAIT STUDIO / 人物立绘工坊</p>
          <h2>把人物档案变成真正的角色立绘。</h2>
          <p>接口由本地服务代理，API 密钥不会进入网页代码或浏览器存储。</p>
        </div>
        <span class="api-state ${status.configured ? "ready" : "missing"}">
          ${status.configured ? "API 已连接" : "等待配置密钥"}
        </span>
      </div>
      <div class="image-studio-settings">
        <label>
          <span>角色</span>
          <select data-ai-role>
            ${Object.entries(ROLE_DATA)
              .map(
                ([id, role]) =>
                  `<option value="${id}" ${id === roleId ? "selected" : ""}>${role.name} · ${role.title}</option>`
              )
              .join("")}
            <option value="shen">沈越 · 项目发起人</option>
            <option value="lu">陆师傅 · 夜班门卫</option>
            <option value="han">韩梅 · 资料室保洁员</option>
            <option value="xiaoman">林小满 · 展演志愿者</option>
          </select>
        </label>
        <label>
          <span>表情与动作</span>
          <select data-ai-pose>
            <option value="neutral">平静倾听</option>
            <option value="guarded">克制防备</option>
            <option value="tense">紧绷迟疑</option>
            <option value="soft">卸下防备</option>
            <option value="firm">坚定回应</option>
          </select>
        </label>
      </div>
      <div class="image-studio-meta">
        <span>模型 ${escapeHtml(status.model || "gpt-image-2.5-flare")}</span>
        <span>画质 ${escapeHtml(status.quality || "high")}</span>
        <span>竖版 1024×1536</span>
      </div>
      ${
        status.generationEnabled
          ? `
            <button class="image-generate-button" type="button" data-action="generate-ai-portrait">
              生成写实角色立绘
            </button>
          `
          : status.configured && status.publicShare
            ? `
              <div class="api-setup-note">
                <b>分享模式：游戏可玩，AI 生成仅限本地</b>
                <p>为避免访客消耗你的 API 额度，公开链接会关闭图像生成按钮。角色立绘生成请在本机页面操作。</p>
              </div>
            `
            : `
            <div class="api-setup-note">
              <b>还差最后一步：配置 OpenAI API 密钥</b>
              <p>在项目根目录把 <code>.env.example</code> 复制为 <code>.env</code>，填写 <code>OPENAI_API_KEY=...</code>。本地服务会自动读取，无需重启。请勿把密钥发送到聊天或写进前端代码。</p>
              <button type="button" data-action="retry-image-status">配置完成，重新检查接口</button>
            </div>
          `
      }
      <div id="ai-image-result" class="ai-image-result" aria-live="polite">
        <span>生成结果会显示在这里</span>
      </div>
      <p class="image-studio-cost">
        AI 生成会产生 API 费用。模型、尺寸和画质会直接影响费用与等待时间；生成前请确认账户额度。
      </p>
      ${
        gallery.length
          ? `
            <div class="ai-gallery">
              <span>RECENT PORTRAITS / 最近生成</span>
              <div>
                ${gallery
                  .map(
                    (image) =>
                      `<a href="${escapeHtml(image.url)}" target="_blank" rel="noreferrer"><img src="${escapeHtml(image.url)}" alt="生成的角色立绘" /></a>`
                  )
                  .join("")}
              </div>
            </div>
          `
          : ""
      }
      <div class="modal-actions">
        <button type="button" data-close-modal>关闭工坊</button>
      </div>
    </div>
  `);
}

async function openImageStudio() {
  openModal(`
    <div class="image-studio-loading">
      <span>AI PORTRAIT STUDIO</span>
      <p>正在检查本地图像生成服务…</p>
    </div>
  `);
  try {
    const response = await fetch("/api/image/status", { headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error("status unavailable");
    const status = await response.json();
    if (!modalLayer.hidden) renderImageStudio(status);
  } catch {
    openModal(`
      <p class="modal-kicker">AI PORTRAIT STUDIO</p>
      <h2>本地图像服务尚未启动。</h2>
      <p class="modal-narrative">
        网页已经包含生成界面，但当前服务没有返回接口状态。
        请从项目目录运行 <code>node .\\work\\serve.js</code> 后刷新页面。
      </p>
      <div class="modal-actions">
        <button class="primary" type="button" data-action="retry-image-status">重新检查</button>
        <button type="button" data-close-modal>关闭</button>
      </div>
    `);
  }
}

async function generateAiPortrait() {
  const roleSelect = document.querySelector("[data-ai-role]");
  const poseSelect = document.querySelector("[data-ai-pose]");
  const result = document.querySelector("#ai-image-result");
  const button = document.querySelector('[data-action="generate-ai-portrait"]');
  if (!roleSelect || !poseSelect || !result || !button) return;

  button.disabled = true;
  button.textContent = "正在生成，可能需要一到两分钟…";
  result.className = "ai-image-result is-loading";
  result.innerHTML = `
    <div class="ai-loading-bars" aria-hidden="true"><i></i><i></i><i></i></div>
    <span>正在绘制人物表情、动作与场景光影</span>
  `;

  try {
    const response = await fetch("/api/image/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        roleId: roleSelect.value,
        pose: poseSelect.value,
      }),
    });
    const payload = await response.json();
    if (!response.ok || !payload.url) {
      throw new Error(payload?.error?.message || "人物图像生成失败。");
    }
    result.className = "ai-image-result has-image";
    result.innerHTML = `
      <img src="${escapeHtml(payload.url)}" alt="生成的${ROLE_DATA[roleSelect.value]?.name || "角色"}立绘" />
      <div>
        <span>GENERATION COMPLETE / 已生成</span>
        <b>${ROLE_DATA[roleSelect.value]?.name || "角色"} · ${POSE_LABELS[poseSelect.value]}</b>
        <a href="${escapeHtml(payload.url)}" download>下载原图</a>
      </div>
    `;
    showToast("AI 角色立绘已生成并保存到本地素材目录。");
  } catch (error) {
    result.className = "ai-image-result is-error";
    result.innerHTML = `
      <span>生成未完成</span>
      <p>${escapeHtml(error.message || "请检查 API 密钥、账户额度和网络连接。")}</p>
    `;
    showToast("AI 立绘生成失败，请查看工坊中的错误说明。");
  } finally {
    button.disabled = false;
    button.textContent = "再次生成";
  }
}

function beginRole(roleId) {
  const role = ROLE_DATA[roleId];
  if (!role) return;
  const completedRoles = [...state.rolesCompleted];
  const sound = state.sound;
  state = cloneDefaults();
  state.rolesCompleted = completedRoles;
  state.sound = sound;
  state.role = roleId;
  state.started = true;
  state.section = "overview";
  saveState();
  closeModal();
  landing.hidden = true;
  gameShell.hidden = false;
  render();
  openRoleDossier(true);
  showToast(`你将以${role.name}的身份进入故事。`);
}

function startGame(forceNew = false) {
  if (!state.role) {
    openRoleSelection();
    return;
  }
  if (forceNew) {
    state = cloneDefaults();
    openRoleSelection();
    return;
  }
  state.started = true;
  saveState();
  landing.hidden = true;
  gameShell.hidden = false;
  state.section = state.solved ? "result" : "overview";
  render();
  if (state.sound) startAmbientSound();
  showToast("创作事件档案已打开。先沿着《光屿》的路线寻找线索。");
}

function searchScene(sceneId) {
  const scene = CASE_DATA.scenes.find((item) => item.id === sceneId);
  if (!scene) return;
  const role = getCurrentRole();
  const rolePerspective = role?.perspectives[scene.id];
  const observations = NARRATIVE_LAYERS.sceneDetails[scene.id] || [];
  const newClues = [];
  scene.clues.forEach((clueId) => {
    if (!state.clues.includes(clueId)) {
      state.clues.push(clueId);
      newClues.push(clueId);
    }
  });
  if (!state.discoveredScenes.includes(sceneId)) {
    state.discoveredScenes.push(sceneId);
  }
  saveState();

  const clueMarkup = scene.clues
    .map((id) => {
      const clue = CASE_DATA.clues[id];
      return `
        <div class="found-clue">
          <span>＋</span>
          <div><b>${clue.title}</b><small>${clue.type}</small></div>
        </div>
      `;
    })
    .join("");

  openModal(`
    <p class="modal-kicker">${scene.location} / SCENE ${scene.index}</p>
    <h2>${scene.title}</h2>
    <div class="scene-modal-image" style="background-image:url('${scene.image}')">
      <span>${scene.location} · 17:47</span>
    </div>
    <div class="narrator-box">
      <span>NARRATOR / 旁白</span>
      <p>${scene.narration}</p>
      <small>环境声：${scene.ambient}</small>
      <div>
        <button type="button" data-action="read-scene" data-id="${scene.id}">沉浸朗读旁白</button>
        <button type="button" data-action="play-scene-sound" data-id="${scene.id}">试听环境音</button>
      </div>
    </div>
    ${
      rolePerspective
        ? `
          <div class="role-perspective">
            <span>YOUR POV / ${role.name}的视角</span>
            <p>${rolePerspective}</p>
          </div>
        `
        : ""
    }
    <div class="modal-narrative">
      ${scene.narrative.map((paragraph) => `<p>${paragraph}</p>`).join("")}
    </div>
    <hr class="modal-divider" />
    <p class="modal-kicker">环境观察 / 不进入证物袋的细节</p>
    <div class="scene-detail-grid">
      ${observations
        .map(
          (item, index) => `
            <article class="scene-detail">
              <span>OBS ${String(index + 1).padStart(2, "0")}</span>
              <b>${item.label}</b>
              <p>${item.text}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <hr class="modal-divider" />
    <p class="modal-kicker">${newClues.length ? "新增证物" : "证物记录"}</p>
    <div class="found-clues">${clueMarkup}</div>
    <div class="modal-actions">
      <button class="primary" type="button" data-action="modal-go-clues">打开证物柜</button>
      <button type="button" data-close-modal>返回现场地图</button>
    </div>
  `);
  if (state.sound) playEnvironmentSound(scene.id);
  render();
  if (newClues.length) {
    playTone("clue");
    showToast(`已归档 ${newClues.length} 件新证物。`);
  } else {
    showToast("现场复查完成，没有发现新的证物。");
  }
}

function openPerson(personId) {
  const person = CASE_DATA.suspects.find((item) => item.id === personId);
  if (!person) return;
  if (person.id === state.role) {
    openRoleDossier();
    return;
  }
  const role = getCurrentRole();
  const roleReaction = role?.reactions[person.id];
  const activeQuestion = person.questions.find((q) => q.id === state.activeQuestion);
  const microCount = person.questions.filter((question) =>
    state.microReads.includes(question.id)
  ).length;
  const activeMicro = activeQuestion ? NARRATIVE_LAYERS.micro[activeQuestion.id] : null;
  const microRead = activeQuestion ? state.microReads.includes(activeQuestion.id) : false;
  const portraitPose = activeQuestion ? (microRead ? getMicroPose(activeQuestion.id) : "guarded") : "neutral";
  const questionMarkup = person.questions
    .map((question, index) => {
      const asked = state.conversations.includes(question.id);
      const observed = state.microReads.includes(question.id);
      const locked = question.requires && !state.clues.includes(question.requires);
      return `
        <button
          type="button"
          class="question-button ${asked ? "asked" : ""} ${locked ? "locked" : ""}"
          data-action="ask-question"
          data-person="${person.id}"
          data-id="${question.id}"
          ${locked ? "disabled" : ""}
        >
          <span>Q${String(index + 1).padStart(2, "0")}</span>
          <span>${locked ? "需要新的证物才能追问" : question.label}</span>
          <span>${observed ? "已读心" : asked ? "可观察" : locked ? "锁" : "询问"}</span>
        </button>
      `;
    })
    .join("");

  openModal(`
    <div class="suspect-head">
      <div class="suspect-monogram" data-pose="${portraitPose}">
        <img src="./assets/portraits/${person.id}.svg" alt="${person.name}的角色肖像" />
        ${portraitExpressionMarkup(person.id, portraitPose)}
        <span class="portrait-pose-label">${POSE_LABELS[portraitPose]}</span>
      </div>
      <div>
        <p class="modal-kicker">${person.no} / INTERVIEW</p>
        <h2>${person.name}</h2>
        <p>${person.role}</p>
      </div>
    </div>
    <div class="modal-narrative">
      <p>${person.bio}</p>
      <p><strong>已登记说辞：</strong>${person.alibi}</p>
    </div>
    <hr class="modal-divider" />
    <div class="empathy-meter">
      <div>
        <span>人物侧写 / 微表情</span>
        <b>${microCount} / 2</b>
      </div>
      <i><em style="width:${Math.min(100, microCount * 50)}%"></em></i>
      <p>听取回答后可以观察微表情。至少读懂两处，会解锁只属于这个人的“心证”。</p>
    </div>
    <div class="question-list">${questionMarkup}</div>
    ${
      activeQuestion && state.conversations.includes(activeQuestion.id)
        ? `
          <div class="answer-box">
            <small>ANSWER / ${person.name}</small>
            <p>${activeQuestion.answer}</p>
            ${
              activeMicro
                ? microRead
                  ? `
                    <div class="micro-read">
                      <span>MICROEXPRESSION / 微表情</span>
                      <p>${activeMicro.expression}</p>
                      <small>${activeMicro.subtext}</small>
                    </div>
                  `
                  : `
                    <button
                      class="observe-button"
                      type="button"
                      data-action="observe-micro"
                      data-person="${person.id}"
                      data-id="${activeQuestion.id}"
                    >
                      <span aria-hidden="true">◉</span> 观察此刻的微表情
                    </button>
                  `
                : ""
            }
          </div>
        `
        : ""
    }
    ${
      activeQuestion && roleReaction
        ? `
          <div class="role-reaction">
            <span>YOUR READ / ${role.name}的判断</span>
            <p>${roleReaction}</p>
          </div>
        `
        : ""
    }
    ${
      microCount >= 2
        ? `
          <div class="heart-proof">
            <span>HEART PROOF / 人物心证</span>
            <p>${NARRATIVE_LAYERS.hearts[person.id]}</p>
          </div>
        `
        : ""
    }
    <div class="modal-actions">
      <button type="button" data-close-modal>结束询问</button>
    </div>
  `);
}

function openNpc(npcId) {
  const npc = NARRATIVE_LAYERS.npcs.find((item) => item.id === npcId);
  if (!npc) return;
  if (!state.npcReads.includes(npcId)) {
    state.npcReads.push(npcId);
    saveState();
  }
  openModal(`
    <div class="npc-dossier-head">
      <img src="${npc.image}" alt="${npc.name}的人物肖像" />
      <div>
        <p class="modal-kicker">NPC WITNESS / 场外证词</p>
        <h2>${npc.name}</h2>
        <p>${npc.age} · ${npc.title}</p>
        <small>${npc.location}</small>
      </div>
    </div>
    <blockquote class="npc-quote">${npc.quote}</blockquote>
    <div class="npc-testimony">
      <span>RECORDED TESTIMONY / 已记录证词</span>
      ${npc.testimony.map((line) => `<p>${line}</p>`).join("")}
    </div>
    <div class="npc-observation">
      <span>WITNESS NOTE / 调查观察</span>
      <p>${npc.observation}</p>
    </div>
    <div class="modal-actions">
      <button class="primary" type="button" data-action="read-passage" data-id="${npc.id}">沉浸朗读这段证词</button>
      <button type="button" data-close-modal>返回人物档案</button>
    </div>
  `);
  render();
  showToast(`已记录${npc.name}的场外证词。`);
}

function askQuestion(personId, questionId) {
  const person = CASE_DATA.suspects.find((item) => item.id === personId);
  const question = person?.questions.find((item) => item.id === questionId);
  if (!question) return;
  if (question.requires && !state.clues.includes(question.requires)) return;
  if (!state.conversations.includes(questionId)) {
    state.conversations.push(questionId);
    playTone("talk");
  }
  state.activeQuestion = questionId;
  saveState();
  openPerson(personId);
  render();
}

function observeMicro(personId, questionId) {
  const person = CASE_DATA.suspects.find((item) => item.id === personId);
  const question = person?.questions.find((item) => item.id === questionId);
  if (!question || !NARRATIVE_LAYERS.micro[questionId]) return;
  if (!state.conversations.includes(questionId)) return;

  if (!state.microReads.includes(questionId)) {
    state.microReads.push(questionId);
  }
  const microCount = person.questions.filter((item) =>
    state.microReads.includes(item.id)
  ).length;
  saveState();
  playTone("clue");
  openPerson(personId);
  render();
  showToast(
    microCount >= 2
      ? `已读懂${person.name}的两处微表情，人物心证解锁。`
      : `已记录${person.name}的一处微表情。`
  );
}

function openClue(clueId) {
  const clue = CASE_DATA.clues[clueId];
  if (!clue) return;
  openModal(`
    <p class="modal-kicker">${clue.type} / EVIDENCE FILE</p>
    <div class="clue-file">
      <div class="clue-visual">
        <span>${clue.visual}</span>
        <small>PHOTOGRAPH · ZY-${String(state.clues.indexOf(clueId) + 1).padStart(2, "0")}</small>
      </div>
      <div class="clue-copy">
        <p class="eyebrow">归档结论</p>
        <h2>${clue.title}</h2>
        <p>${clue.detail}</p>
        <p class="clue-quote">${clue.quote.replaceAll("\n", "<br />")}</p>
        <p><strong>推理提示：</strong>${clue.implication}</p>
      </div>
    </div>
    <div class="modal-actions">
      <button class="primary" type="button" data-action="modal-go-deduction">进入推演室</button>
      <button type="button" data-close-modal>返回证物柜</button>
    </div>
  `);
}

function solveContradiction(choice) {
  if (choice === "tang") {
    state.contradictionSolved = true;
    saveState();
    playTone("success");
    showToast("证词矛盾已锁定：唐予安的工作卡在 17:44 打开了资料室 207。");
    render();
  } else {
    state.hintCount += 1;
    saveState();
    playTone("error");
    const button = document.querySelector(`[data-action="solve-contradiction"][data-id="${choice}"]`);
    button?.classList.add("wrong");
    showToast("这条线索只能说明疑点，不能直接推翻证词。再核对 17:44 的资料室门禁记录。");
  }
}

function moveTimeline(id, direction) {
  if (state.timelineSolved) return;
  const index = state.timelineOrder.indexOf(id);
  const newIndex = index + Number(direction);
  if (index < 0 || newIndex < 0 || newIndex >= state.timelineOrder.length) return;
  [state.timelineOrder[index], state.timelineOrder[newIndex]] = [
    state.timelineOrder[newIndex],
    state.timelineOrder[index],
  ];
  saveState();
  render();
}

function checkTimeline() {
  const correct = CASE_DATA.timeline.map((item) => item.id);
  if (correct.every((id, index) => state.timelineOrder[index] === id)) {
    state.timelineSolved = true;
    saveState();
    playTone("success");
    showToast("作品路线已复原。创作真相模块解锁。");
    render();
  } else {
    state.hintCount += 1;
    saveState();
    playTone("error");
    showToast("顺序仍有断裂。钥匙先被领走，核心模块离线后，设备箱才出现在长廊里。");
  }
}

function submitAccusation() {
  const error = document.querySelector("#accusation-error");
  const { killer, motive, method, evidence } = state.finalSelection;
  if (!killer || !motive || !method || !evidence) {
    if (error) error.textContent = "请先完成人物、动机、模块去向和关键证据四项选择。";
    playTone("error");
    return;
  }

  const correct =
    killer === "tang" &&
    motive === "credit" &&
    method === "archive" &&
    evidence === "record";

  if (!correct) {
    state.attempts += 1;
    saveState();
    playTone("error");

    let hint = "这段创作故事仍有一处没有接上。";
    if (killer !== "tang") hint += "请重新检查 17:44 门禁日志中留下姓名的人。";
    else if (method !== "archive") hint += "模块没有被销毁。它还连着资料室的一台旧电脑。";
    else if (motive !== "credit") hint += "录音与署名单都指向同一件事：核心创作的名字正在被删除。";
    else if (evidence !== "record") hint += "仅凭一条消息或一次登记疏漏，无法还原模块离开工坊的完整路线。";
    if (error) error.textContent = hint;
    return;
  }

  state.solved = true;
  if (state.role && !state.rolesCompleted.includes(state.role)) {
    state.rolesCompleted.push(state.role);
  }
  state.section = "result";
  saveState();
  playTone("success");
  render();
}

function showResult() {
  state.section = "result";
  saveState();
  render();
  playTone("success");
}

function chooseEnding(endingId) {
  if (!NARRATIVE_LAYERS.endings[endingId]) return;
  state.endingChoice = endingId;
  saveState();
  playTone("success");
  render();
  showToast(
    endingId === "creator"
      ? "结局 A 已写入：作品由创作者亲手重新点亮。"
      : "结局 B 已写入：完整创作档案向所有人公开。"
  );
}

function openLore() {
  const lore = NARRATIVE_LAYERS.lore;
  openModal(`
    <p class="modal-kicker">ARCHIVE 2022 / 未寄出的光</p>
    <h2>${lore.title}</h2>
    <p class="modal-narrative">${lore.subtitle}</p>
    <div class="lore-hero" style="background-image:url('./assets/campus-bridge.jpg')">
      <span>${lore.year}</span>
      <b>118 盏灯 · 6 分钟 · 13 封信</b>
    </div>
    <div class="lore-story">
      ${lore.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <blockquote>${lore.quote}</blockquote>
    </div>
    <div class="lore-cast">
      <span>当时的四个人</span>
      <div>
        <b>唐予安<small>写灯码的人</small></b>
        <b>许澄<small>想把灯带上台的人</small></b>
        <b>苏遥<small>拍下失败的人</small></b>
        <b>梁恪<small>借来电的人</small></b>
      </div>
    </div>
    <div class="modal-actions">
      <button class="primary" type="button" data-action="modal-go-scenes">回到现在的现场</button>
      <button type="button" data-close-modal>合上旧档</button>
    </div>
  `);
}

function showIntro() {
  openModal(`
    <p class="modal-kicker">BRIEFING / 调查说明</p>
    <h2>你将作为展演前的临时记录员，还原《光屿》消失的最后四十三分钟。</h2>
    <div class="modal-narrative">
      <p>
        本作没有固定阅读顺序。你可以先勘察校园实景，也可以先与四位创作者交谈；
        当证物足够时，推演室会自动开放证词比对。
      </p>
      <p>
        所有对话、线索与进度自动保存在当前浏览器。故事大约需要 25–35 分钟，
        建议准备纸笔记录时间线。
      </p>
    </div>
    <div class="intro-art">
      <div class="intro-rule">
        <b>01 · 勘察</b>
        <p>点击现场卡片，阅读叙述并收集证物。每处现场都可以再次查看。</p>
      </div>
      <div class="intro-rule">
        <b>02 · 询问</b>
        <p>先选问题再听取回答。掌握新证物后，可以解锁更尖锐的追问。</p>
      </div>
      <div class="intro-rule">
        <b>03 · 核对</b>
        <p>收集 5 件证物后，在推演室锁定矛盾并复原作品消失的行动路线。</p>
      </div>
      <div class="intro-rule">
        <b>04 · 补完</b>
        <p>选择责任人、动机、模块去向与关键证据。答错不会结束游戏，可继续修改。</p>
      </div>
    </div>
    <p class="modal-narrative" style="font-size:0.67rem;color:var(--muted)">
      内容声明：本作以中原科技学院校园实景为灵感，所有人物、事件和具体情节均为虚构，
      不代表任何真实师生或现实事件。
    </p>
    <div class="modal-actions">
      <button class="primary" type="button" data-action="start-from-modal">进入调查</button>
      <button type="button" data-close-modal>返回封面</button>
    </div>
  `);
}

function resetGame() {
  const confirmed = window.confirm("确定要清除当前进度并重新调查吗？此操作无法撤销。");
  if (!confirmed) return;
  const completedRoles = [...state.rolesCompleted];
  const sound = state.sound;
  state = cloneDefaults();
  state.rolesCompleted = completedRoles;
  state.sound = sound;
  saveState();
  closeModal();
  gameShell.hidden = true;
  landing.hidden = false;
  document.querySelector("#start-label").textContent = "进入调查";
  updateChrome();
  playTone("ui");
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3400);
}

function playTone(kind = "ui") {
  if (!state.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const frequency = kind === "success" ? 520 : kind === "error" ? 150 : 300;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    if (kind === "success") {
      oscillator.frequency.exponentialRampToValueAtTime(760, audioContext.currentTime + 0.16);
    }
    gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, audioContext.currentTime + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.2);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 0.22);
  } catch {
    // Optional sound must not block gameplay.
  }
}

const NARRATION_PROFILES = {
  mysterious: { rate: 0.82, pitch: 0.9, volume: 0.9, pauses: [520, 380, 640, 460] },
  urgent: { rate: 0.94, pitch: 1.02, volume: 0.94, pauses: [260, 320, 240, 380] },
  suspense: { rate: 0.84, pitch: 0.92, volume: 0.9, pauses: [480, 620, 340, 560] },
  melancholy: { rate: 0.78, pitch: 0.88, volume: 0.86, pauses: [560, 700, 430, 640] },
  nostalgic: { rate: 0.86, pitch: 0.97, volume: 0.9, pauses: [420, 520, 360, 580] },
  witness: { rate: 0.82, pitch: 0.94, volume: 0.88, pauses: [360, 480, 320, 500] },
};

let narrationSessionId = 0;

function findChineseNarrationVoice() {
  const voices = window.speechSynthesis.getVoices();
  const preferredNames = [
    "Xiaoxiao",
    "晓晓",
    "Yunxi",
    "云希",
    "Huihui",
    "慧慧",
    "Yaoyao",
    "瑶瑶",
    "Google 普通话",
  ];
  for (const name of preferredNames) {
    const match = voices.find((voice) => voice.name.includes(name));
    if (match) return match;
  }
  return voices.find((voice) => voice.lang?.toLowerCase().startsWith("zh")) || null;
}

function readNarration(text, label = "旁白", profileName = "mysterious") {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    showToast("当前浏览器不支持语音朗读，旁白文字仍可正常阅读。");
    return;
  }
  narrationSessionId += 1;
  const sessionId = narrationSessionId;
  window.speechSynthesis.cancel();
  const profile = NARRATION_PROFILES[profileName] || NARRATION_PROFILES.mysterious;
  const voice = findChineseNarrationVoice();
  const passages = text
    .replace(/^旁白[：:]\s*/, "")
    .replace(/环境声[：:].*$/, "")
    .match(/[^。！？；]+[。！？；]?/g)
    ?.map((part) => part.trim())
    .filter(Boolean) || [text];

  const speakPassage = (index) => {
    if (sessionId !== narrationSessionId) return;
    if (index >= passages.length) {
      showToast(`${label}朗读结束。`);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(passages[index]);
    utterance.lang = "zh-CN";
    utterance.rate = Math.max(0.68, profile.rate + (index % 3 - 1) * 0.025);
    utterance.pitch = Math.max(0.78, profile.pitch + (index % 2 ? 0.025 : -0.015));
    utterance.volume = profile.volume;
    if (voice) utterance.voice = voice;
    utterance.onend = () => {
      if (sessionId !== narrationSessionId) return;
      setTimeout(
        () => speakPassage(index + 1),
        profile.pauses[index % profile.pauses.length]
      );
    };
    utterance.onerror = () => {
      if (sessionId === narrationSessionId) {
        showToast("语音朗读被浏览器中断，请再次点击朗读。");
      }
    };
    window.speechSynthesis.speak(utterance);
  };

  showToast(`沉浸朗读：${label}。语速与停顿会随情绪变化。`);
  speakPassage(0);
}

function readSceneNarration(sceneId) {
  const scene = CASE_DATA.scenes.find((item) => item.id === sceneId);
  if (!scene) return;
  const profile =
    scene.id === "studio"
      ? "urgent"
      : scene.id === "archive"
        ? "melancholy"
        : scene.id === "courtyard"
          ? "nostalgic"
          : "suspense";
  readNarration(`${scene.narration}。环境声音：${scene.ambient}`, `${scene.title}旁白`, profile);
}

function readOverviewNarration() {
  readNarration(NARRATIVE_LAYERS.overviewNarration, "开场旁白", "mysterious");
}

function readNpcTestimony(npcId) {
  const npc = NARRATIVE_LAYERS.npcs.find((item) => item.id === npcId);
  if (!npc) return;
  readNarration(
    `${npc.name}，${npc.title}。${npc.quote}。${npc.testimony.join("")}`,
    `${npc.name}的证词`,
    "witness"
  );
}

let ambientNodes = [];
let environmentNodes = [];
let environmentTimer = null;

function stopEnvironmentSound() {
  environmentNodes.forEach((node) => {
    try {
      if (typeof node.stop === "function") node.stop();
      if (typeof node.disconnect === "function") node.disconnect();
    } catch {
      // Already stopped.
    }
  });
  environmentNodes = [];
  if (environmentTimer) {
    clearInterval(environmentTimer);
    environmentTimer = null;
  }
}

function playEnvironmentSound(sceneId) {
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    if (!state.sound) {
      state.sound = true;
      saveState();
      updateChrome();
      startAmbientSound();
    }
    stopEnvironmentSound();

    const duration = audioContext.sampleRate * 2;
    const noiseBuffer = audioContext.createBuffer(1, duration, audioContext.sampleRate);
    const noiseData = noiseBuffer.getChannelData(0);
    for (let i = 0; i < duration; i += 1) {
      noiseData[i] = Math.random() * 2 - 1;
    }

    const master = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();
    const noise = audioContext.createBufferSource();
    noise.buffer = noiseBuffer;
    noise.loop = true;
    noise.connect(filter).connect(master).connect(audioContext.destination);

    const settings = {
      studio: { type: "lowpass", frequency: 430, q: 0.8, gain: 0.025 },
      corridor: { type: "bandpass", frequency: 790, q: 1.1, gain: 0.018 },
      archive: { type: "highpass", frequency: 1600, q: 0.5, gain: 0.009 },
      courtyard: { type: "lowpass", frequency: 330, q: 0.7, gain: 0.036 },
    };
    const selected = settings[sceneId] || settings.corridor;
    filter.type = selected.type;
    filter.frequency.value = selected.frequency;
    filter.Q.value = selected.q;
    master.gain.value = selected.gain;
    noise.start();
    environmentNodes.push(noise, filter, master);

    if (sceneId === "studio") {
      const hum = audioContext.createOscillator();
      const humGain = audioContext.createGain();
      hum.type = "sine";
      hum.frequency.value = 118;
      humGain.gain.value = 0.006;
      hum.connect(humGain).connect(audioContext.destination);
      hum.start();
      environmentNodes.push(hum, humGain);
    }

    if (sceneId === "archive") {
      const tick = () => {
        if (!audioContext) return;
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.type = "square";
        oscillator.frequency.value = 980;
        gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.012, audioContext.currentTime + 0.006);
        gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.045);
        oscillator.connect(gain).connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.05);
      };
      tick();
      environmentTimer = setInterval(tick, 900);
    }

    if (sceneId === "courtyard") {
      const wind = audioContext.createOscillator();
      const windGain = audioContext.createGain();
      wind.type = "sine";
      wind.frequency.value = 0.16;
      windGain.gain.value = 0.015;
      wind.connect(windGain).connect(master.gain);
      wind.start();
      environmentNodes.push(wind, windGain);
    }

    showToast("环境音已开启：关闭现场窗口时自动停止。");
  } catch {
    showToast("环境音暂时无法播放，请检查浏览器声音权限。");
  }
}

function startAmbientSound() {
  if (!state.sound || ambientNodes.length) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const master = audioContext.createGain();
    master.gain.value = 0.013;
    master.connect(audioContext.destination);

    [42, 54].forEach((frequency) => {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = "sine";
      oscillator.frequency.value = frequency;
      gain.gain.value = 0.5;
      oscillator.connect(gain).connect(master);
      oscillator.start();
      ambientNodes.push(oscillator, gain);
    });
    ambientNodes.push(master);
  } catch {
    // Audio is optional.
  }
}

function stopAmbientSound() {
  stopEnvironmentSound();
  ambientNodes.forEach((node) => {
    try {
      if (typeof node.stop === "function") node.stop();
      if (typeof node.disconnect === "function") node.disconnect();
    } catch {
      // Ignore already stopped nodes.
    }
  });
  ambientNodes = [];
}

function toggleSound() {
  state.sound = !state.sound;
  saveState();
  if (state.sound) {
    startAmbientSound();
    playTone("ui");
    showToast("声音已开启：低沉环境音与操作提示音。");
  } else {
    stopAmbientSound();
    narrationSessionId += 1;
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    showToast("声音已关闭。");
  }
  updateChrome();
}

document.addEventListener("click", (event) => {
  const navButton = event.target.closest("[data-nav]");
  if (navButton) {
    state.section = navButton.dataset.nav;
    saveState();
    render();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (actionButton) {
    const { action, id } = actionButton.dataset;
    if (action === "search-scene") searchScene(id);
    if (action === "select-role") beginRole(id);
    if (action === "open-role-dossier") openRoleDossier();
    if (action === "open-tutorial") openTutorial(0);
    if (action === "open-image-studio") openImageStudio();
    if (action === "retry-image-status") openImageStudio();
    if (action === "generate-ai-portrait") generateAiPortrait();
    if (action === "tutorial-step") openTutorial(actionButton.dataset.id);
    if (action === "tutorial-finish") openRoleSelection();
    if (action === "role-dossier-enter") closeModal();
    if (action === "switch-role") openRoleSelection("switch");
    if (action === "open-person") openPerson(id);
    if (action === "open-npc") openNpc(id);
    if (action === "read-overview") readOverviewNarration();
    if (action === "read-scene") readSceneNarration(id);
    if (action === "play-scene-sound") playEnvironmentSound(id);
    if (action === "read-passage") readNpcTestimony(id);
    if (action === "open-clue") openClue(id);
    if (action === "ask-question") askQuestion(actionButton.dataset.person, id);
    if (action === "observe-micro") observeMicro(actionButton.dataset.person, id);
    if (action === "open-lore") openLore();
    if (action === "choose-ending") chooseEnding(id);
    if (action === "solve-contradiction") solveContradiction(id);
    if (action === "move-timeline") moveTimeline(id, actionButton.dataset.dir);
    if (action === "check-timeline") checkTimeline();
    if (action === "submit-accusation") submitAccusation();
    if (action === "show-result") showResult();
    if (action === "modal-go-clues") {
      closeModal();
      state.section = "clues";
      render();
    }
    if (action === "modal-go-deduction") {
      closeModal();
      state.section = "deduction";
      render();
    }
    if (action === "modal-go-scenes") {
      closeModal();
      state.section = "scenes";
      render();
    }
    if (action === "start-from-modal") {
      closeModal();
      startGame();
    }
    if (action === "review-evidence") {
      const missing = Object.keys(CASE_DATA.clues).filter((id) => !state.clues.includes(id));
      if (missing.length) {
        state.section = "scenes";
        saveState();
        render();
        showToast("仍有现场没有勘察。前往现场补全证物。");
      } else {
        state.section = "clues";
        render();
      }
    }
    if (action === "read-again") {
      state.section = "deduction";
      saveState();
      render();
    }
    if (action === "reset-game") resetGame();
    if (
      action !== "solve-contradiction" &&
      action !== "move-timeline" &&
      action !== "observe-micro" &&
      action !== "choose-ending"
    ) playTone("ui");
    return;
  }

  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("change", (event) => {
  const field = event.target.closest("[data-final-field]");
  if (field) {
    state.finalSelection[field.dataset.finalField] = field.value;
    saveState();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modalLayer.hidden) closeModal();
});

document.querySelector("#start-game").addEventListener("click", () => {
  if (state.started && state.role && !state.solved) {
    landing.hidden = true;
    gameShell.hidden = false;
    state.section = state.section === "result" ? "overview" : state.section;
    render();
    showToast("已载入上次调查进度。");
  } else if (state.solved) {
    landing.hidden = true;
    gameShell.hidden = false;
    state.section = "result";
    render();
  } else {
    openRoleSelection();
  }
  playTone("ui");
});

document.querySelector("#intro-button").addEventListener("click", () => openTutorial(0));
document.querySelector("#landing-ai-button").addEventListener("click", openImageStudio);
document.querySelector("#tutorial-button").addEventListener("click", () => openTutorial(0));
document.querySelector("#image-studio-button").addEventListener("click", openImageStudio);
document.querySelector("#sound-toggle").addEventListener("click", toggleSound);
document.querySelector("#landing-sound").addEventListener("click", toggleSound);
document.querySelector("#restart-button").addEventListener("click", resetGame);

function initialize() {
  updateChrome();
  if (state.started && state.role) {
    document.querySelector("#start-label").textContent = state.solved
      ? "查看创作复盘"
      : "继续调查";
  }
  if (state.sound) startAmbientSound();
}

initialize();
