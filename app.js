const DATA_VERSION = "2026-06-26";

const sources = [
  {
    id: "unodc-2025-inflection",
    name: "UNODC：Cyberfraud in the Mekong reaches inflection point",
    type: "国际组织",
    date: "2025-04-21",
    credibility: "高",
    url: "https://www.unodc.org/roseap/en/2025/04/cyberfraud-inflection-point-mekong/story.html",
    note: "指出东南亚诈骗中心、地下钱庄、技术服务和人口贩运正在形成跨境犯罪生态。"
  },
  {
    id: "interpol-2025-scam-centres",
    name: "INTERPOL：globalization of scam centres",
    type: "国际刑警组织",
    date: "2025-06-30",
    credibility: "高",
    url: "https://www.interpol.int/en/News-and-Events/News/2025/INTERPOL-releases-new-information-on-globalization-of-scam-centres",
    note: "说明受害者来自 66 个国家，东南亚仍是主要目的地，AI 正被用于招聘诱骗和社工诈骗。"
  },
  {
    id: "china-thailand-2026-job",
    name: "中国驻泰国使馆：警惕高薪招聘陷阱",
    type: "使领馆提醒",
    date: "2026-05-17",
    credibility: "高",
    url: "https://th.china-embassy.gov.cn/sgxw/202605/t20260517_11911860.html",
    note: "提醒来泰中国公民不要轻信高薪工作、包机票食宿等承诺，赴泰工作学习需办妥相应签证。"
  },
  {
    id: "china-myanmar-2025-fraud",
    name: "中国驻缅甸使领馆：谨防电信诈骗",
    type: "使领馆提醒",
    date: "2025-01-10",
    credibility: "高",
    url: "https://mm.china-embassy.gov.cn/lsfw/202501/t20250110_11531092.htm",
    note: "提及多名中国公民通过社交平台遭遇海外高薪招聘骗局，被诱骗偷渡至妙瓦底地区。"
  },
  {
    id: "mps-2026-telecom-fraud",
    name: "新华社/公安部：2025 年电诈案件通报",
    type: "中国警方公开通报",
    date: "2026-01-08",
    credibility: "高",
    url: "https://www.news.cn/20260108/d0e8977f974f4aadb759b37ae60a87f7/c.html",
    note: "通报跨境电诈打击、国际合作和妙瓦底地区相关押解情况。"
  },
  {
    id: "scamwatch-chinese-authority",
    name: "Scamwatch：Chinese authority scams",
    type: "澳大利亚反诈机构",
    date: "2025-12-01",
    credibility: "高",
    url: "https://www.scamwatch.gov.au/types-of-scams/threat-scams/chinese-authority-scams",
    note: "说明假冒中国权威机构、威胁逮捕/遣返、虚拟绑架等面向中文社区的诈骗。"
  },
  {
    id: "vic-police-chinese-authority",
    name: "Victoria Police：Fake authority scams targeting the Chinese community",
    type: "澳大利亚警方",
    date: "2025-02-06",
    credibility: "高",
    url: "https://www.police.vic.gov.au/scams-targeting-mandarin-speaking-community",
    note: "面向普通话社区说明假冒权威、勒索和虚拟绑架风险，并建议通过独立渠道联系警方或官方机构。"
  },
  {
    id: "afp-2026-cambodia-script",
    name: "Australian Federal Police：Cambodian scammers posing as AFP",
    type: "澳大利亚警方",
    date: "2026-06-08",
    credibility: "高",
    url: "https://www.afp.gov.au/news-centre/media-release/revealed-sophisticated-script-cambodian-scammers-used-pose-afp-officers",
    note: "披露柬埔寨诈骗中心假冒 AFP、视频核验、保密协议、频繁报到等社工流程。"
  },
  {
    id: "nz-police-fake-kidnap",
    name: "New Zealand Police：phone scam targeting Chinese community",
    type: "新西兰警方",
    date: "2018-05-02",
    credibility: "高",
    url: "https://www.police.govt.nz/news/release/police-warning-over-new-phone-scam",
    note: "提醒华人社区和留学生警惕假领馆电话、索取个人信息并向家属勒索的假绑架骗局。"
  },
  {
    id: "nz-police-105-fraud-scam-cyber",
    name: "New Zealand Police：Fraud/Scam/Cyber online reporting",
    type: "新西兰警方",
    date: "访问 2026-06-23",
    credibility: "高",
    url: "https://www.police.govt.nz/use-105/fraud-scam-cyber",
    note: "说明遭遇线上诈骗、欺诈、线上滥用或骚扰时，可通过 105 或在线向警方报告，并准备银行流水、邮件、短信等证据。"
  }
];

const categories = [
  "高薪招聘诱骗",
  "跨境失联",
  "园区强迫犯罪",
  "假冒公检法/使领馆",
  "虚拟绑架",
  "投资/加密诈骗",
  "AI 深伪社工"
];

const audiences = [
  "留学生",
  "求职者",
  "游客",
  "海外华人家庭",
  "学校/社团管理员",
  "旅行与招聘平台"
];

const regions = [
  {
    id: "thailand",
    name: "泰国",
    group: "东南亚",
    level: "高风险",
    trend: "风险上升",
    x: 48,
    y: 44,
    focus: "高薪招聘、转机诱导、边境转移、假工作签承诺。",
    signals: ["轻松高薪", "包机票食宿", "要求落地后改行程", "工作签证信息不清"],
    actions: ["核验雇主与签证", "拒绝临时改去边境", "保存同行人和落脚点信息"],
    scores: { heat: 78, credibility: 90, harm: 86 }
  },
  {
    id: "myanmar",
    name: "缅甸",
    group: "东南亚",
    level: "紧急避险",
    trend: "持续高位",
    x: 41,
    y: 38,
    focus: "妙瓦底等边境地区涉及诱骗、偷渡、非法拘禁和强迫电诈风险。",
    signals: ["要求偷渡", "护照被收走", "去园区/公司宿舍不可外出", "联系突然中断"],
    actions: ["避免非法入境", "立即联系当地警方和使领馆", "向亲友共享最后位置"],
    scores: { heat: 86, credibility: 95, harm: 98 }
  },
  {
    id: "cambodia",
    name: "柬埔寨",
    group: "东南亚",
    level: "高风险",
    trend: "持续高位",
    x: 56,
    y: 53,
    focus: "园区化诈骗、虚假招聘、假冒执法人员和跨境资金诈骗。",
    signals: ["社媒招聘绕开正规合同", "要求统一住宿", "扣押证件", "高额离职赔偿"],
    actions: ["核验公司实体", "拒绝交押金和证件", "遇限制自由及时报警"],
    scores: { heat: 82, credibility: 93, harm: 94 }
  },
  {
    id: "laos",
    name: "老挝",
    group: "东南亚",
    level: "高风险",
    trend: "风险上升",
    x: 51,
    y: 42,
    focus: "边境经济区、跨境招聘和转运链条风险。",
    signals: ["工作地点模糊", "中介称可快速入职", "要求先到第三国集合"],
    actions: ["确认合同与工作地点", "不走非正规口岸", "保留中介身份线索"],
    scores: { heat: 70, credibility: 85, harm: 88 }
  },
  {
    id: "philippines",
    name: "菲律宾",
    group: "东南亚",
    level: "风险上升",
    trend: "迁移扩散",
    x: 68,
    y: 55,
    focus: "离岸诈骗中心、设备查扣后迁移、在线投资与情感诈骗。",
    signals: ["线上客服/推广工作异常高薪", "统一设备和账号", "要求使用陌生通讯软件"],
    actions: ["核验招聘资质", "避免参与灰产引流", "可疑时保留账号与链接"],
    scores: { heat: 64, credibility: 82, harm: 78 }
  },
  {
    id: "australia",
    name: "澳大利亚",
    group: "澳新",
    level: "高风险",
    trend: "中文社区受害突出",
    x: 72,
    y: 79,
    focus: "假冒中国权威机构、假冒 AFP、虚拟绑架、投资/加密诈骗。",
    signals: ["普通话来电称涉案", "要求视频核验", "要求保密", "威胁遣返或逮捕"],
    actions: ["挂断并独立拨打官方号码", "联系学校/警方/银行", "提醒家属核实本人安全"],
    scores: { heat: 76, credibility: 92, harm: 84 }
  },
  {
    id: "newzealand",
    name: "新西兰",
    group: "澳新",
    level: "风险上升",
    trend: "中文社区定向诈骗",
    x: 84,
    y: 84,
    focus: "假领馆电话、假绑架、索取个人信息后向国内家属勒索。",
    signals: ["自动语音称来自领馆", "要求提供家属信息", "要求失联配合调查"],
    actions: ["不要提供家属信息", "让家属通过可信渠道复核", "拨打 105 或紧急电话"],
    scores: { heat: 54, credibility: 84, harm: 72 }
  }
];

const helpContacts = [
  {
    region: "中国公民海外",
    priority: "同步领保",
    priorityTone: "blue",
    title: "外交部全球领事保护与服务应急热线",
    contact: "+86-10-12308 / +86-10-65612308",
    when: "涉及中国公民海外人身安全、证件、失联、被困等情况。"
  },
  {
    region: "泰国",
    priority: "紧急先打",
    priorityTone: "danger",
    title: "当地报警与旅游警察",
    contact: "191 / 1155",
    when: "在泰国遇人身危险、非法拘禁、旅游安全或中文协助需求。"
  },
  {
    region: "缅甸",
    priority: "紧急先打",
    priorityTone: "danger",
    title: "当地报警与驻缅使领馆保护电话",
    contact: "0095-199 / 0095-943209657",
    when: "疑似被诱骗至缅甸、偷渡、失联、限制自由。"
  },
  {
    region: "澳大利亚",
    priority: "紧急先打",
    priorityTone: "danger",
    title: "紧急服务 / Crime Stoppers / Scamwatch",
    contact: "000 / 1800 333 000 / scamwatch.gov.au",
    when: "紧急危险、假冒权威诈骗、虚拟绑架、资金已转出。"
  },
  {
    region: "新西兰",
    priority: "紧急先打",
    priorityTone: "danger",
    title: "紧急服务 / 非紧急警方",
    contact: "111 / 105",
    when: "紧急危险拨 111；非紧急诈骗或可疑来电可联系 105。"
  },
  {
    region: "新西兰线上诈骗",
    priority: "非紧急报案",
    priorityTone: "amber",
    title: "105 Fraud/Scam/Cyber 在线报案",
    contact: "105.police.govt.nz / 105",
    when: "在新西兰遭遇网络诈骗、资金损失、线上骚扰或已受害时，保留银行、邮件、短信和社媒证据后向警方在线报案。"
  },
  {
    region: "金融止损",
    priority: "资金止损",
    priorityTone: "violet",
    title: "银行与支付平台",
    contact: "立即冻结账户、争议交易、保留回执",
    when: "已转账、透露银行卡/验证码、安装远控软件或加密钱包被诱导。"
  }
];

const seedAlerts = [
  ["A-031", "维州中文社区假冒权威勒索预警", "australia", "假冒公检法/使领馆", "留学生", "高风险", "高", "2026-06-22", "澳大利亚维州警方提示，假冒权威骗局会针对普通话社区制造涉案、遣返或家人安全压力。", ["普通话自动语音或来电", "声称涉案或签证受影响", "要求绕开亲友和官方渠道"], ["挂断并独立查找官方联系方式", "联系学校/警方/银行核验", "如已转账立即报案并止付"], ["vic-police-chinese-authority", "scamwatch-chinese-authority"], [77, 94, 88]],
  ["A-001", "泰国入境后被要求改去边境工作", "thailand", "高薪招聘诱骗", "求职者", "高风险", "高", "2026-06-12", "高薪岗位承诺包机票食宿，落地后临时要求改去边境地区。", ["高薪轻松", "落地改行程", "签证用途不一致"], ["停止前往边境", "联系亲友共享位置", "拨打当地报警和 12308"], ["china-thailand-2026-job", "interpol-2025-scam-centres"], [78, 90, 86]],
  ["A-002", "妙瓦底相关海外招聘诱骗风险", "myanmar", "跨境失联", "求职者", "紧急避险", "高", "2026-06-10", "社交平台招聘后诱导非法越境，随后与家属联系中断。", ["要求偷渡", "中介催促", "工作地点含糊"], ["不要非法入境", "保存中介账号", "联系当地警方与使领馆"], ["china-myanmar-2025-fraud", "mps-2026-telecom-fraud"], [86, 95, 98]],
  ["A-003", "柬埔寨园区假客服岗位诱骗", "cambodia", "园区强迫犯罪", "求职者", "高风险", "高", "2026-06-08", "以客服、推广、跨境电商岗位名义招聘，到达后限制外出并要求从事诈骗。", ["统一住宿", "扣押证件", "高额离职赔偿"], ["拒绝交证件", "核验公司实体", "遇限制自由立即报警"], ["unodc-2025-inflection", "interpol-2025-scam-centres"], [82, 93, 94]],
  ["A-004", "老挝边境经济区招聘转运风险", "laos", "高薪招聘诱骗", "求职者", "高风险", "高", "2026-06-06", "中介声称可快速入职，要求先到第三国集合再统一转运。", ["第三国集合", "工作地点模糊", "合同缺失"], ["核验合同", "拒绝非正规口岸", "提前报备行程"], ["unodc-2025-inflection"], [70, 85, 88]],
  ["A-005", "澳洲假冒中国公安来电", "australia", "假冒公检法/使领馆", "留学生", "高风险", "高", "2026-06-05", "普通话来电称身份涉案，威胁逮捕、遣返或引渡，要求转账证明清白。", ["陌生来电", "威胁逮捕", "要求转账"], ["挂断电话", "独立联系学校/警方", "提醒家属"], ["scamwatch-chinese-authority"], [76, 92, 84]],
  ["A-006", "柬埔寨诈骗中心假冒 AFP 视频核验", "cambodia", "假冒公检法/使领馆", "游客", "高风险", "高", "2026-06-04", "诈骗团伙假冒澳大利亚执法人员，通过视频和文件包装制造真实感。", ["要求视频核验", "保密协议", "频繁报到"], ["停止视频配合", "独立拨打官方电话", "联系银行"], ["afp-2026-cambodia-script"], [80, 94, 86]],
  ["A-007", "澳洲中文学生虚拟绑架勒索", "australia", "虚拟绑架", "留学生", "高风险", "高", "2026-06-03", "骗子恐吓学生隔离失联，再向家属谎称遭绑架勒索。", ["要求保持通话", "要求自拍受控照片", "要求不联系他人"], ["立刻联系学校和警方", "家属用独立渠道核实", "不要转账"], ["scamwatch-chinese-authority"], [74, 90, 90]],
  ["A-008", "新西兰假领馆电话索取家属信息", "newzealand", "虚拟绑架", "留学生", "风险上升", "高", "2026-06-02", "自动语音冒充领馆，诱导提供个人和中国境内家属信息，后续用于勒索。", ["自动语音", "索要家属信息", "要求回拨"], ["不要提供信息", "拨打官方号码核验", "联系 105"], ["nz-police-fake-kidnap"], [54, 84, 72]],
  ["A-009", "AI 生成招聘广告降低识别难度", "thailand", "AI 深伪社工", "求职者", "风险上升", "高", "2026-05-30", "AI 生成的招聘图片、头像和多语言文案使虚假岗位更像正规雇主。", ["完美头像", "职位描述空泛", "薪酬远高市场"], ["反查公司域名", "视频面试核验实体", "拒绝私聊转账"], ["interpol-2025-scam-centres"], [68, 86, 78]],
  ["A-010", "加密投资群诱导海外华人入金", "australia", "投资/加密诈骗", "海外华人家庭", "高风险", "高", "2026-05-28", "以投资老师、稳健收益、内部渠道为名诱导进入假平台或加密钱包。", ["陌生群荐股", "无法正常提现", "要求追加保证金"], ["停止追加资金", "保存平台域名和钱包地址", "联系银行和警方"], ["unodc-2025-inflection", "scamwatch-chinese-authority"], [72, 88, 86]],
  ["A-011", "菲律宾离岸客服岗位灰产风险", "philippines", "园区强迫犯罪", "求职者", "风险上升", "中高", "2026-05-26", "以客服、直播运营、市场推广为名招工，岗位职责与真实业务不一致。", ["要求统一设备", "话术培训异常", "不能解释客户来源"], ["拒绝参与灰产", "保存招聘记录", "向平台举报"], ["unodc-2025-inflection"], [64, 82, 78]],
  ["A-012", "亲友突然失联并被要求赎身", "myanmar", "跨境失联", "海外华人家庭", "紧急避险", "高", "2026-05-24", "家属收到陌生人信息称亲友欠债或被扣押，要求转账赎人。", ["无法本人通话", "威胁删记录", "要求加密货币"], ["先核实本人安全", "报警并联系使领馆", "不要私下转赎金"], ["interpol-2025-scam-centres", "china-myanmar-2025-fraud"], [84, 92, 98]],
  ["A-013", "旅游签被诱导从事工作", "thailand", "高薪招聘诱骗", "游客", "高风险", "高", "2026-05-22", "以旅游入境后再转工作为承诺，可能涉及非法务工和后续胁迫。", ["先旅游后工作", "签证不匹配", "雇主不出正式合同"], ["入境前办妥签证", "拒绝非法务工", "保存行程"], ["china-thailand-2026-job"], [70, 90, 82]],
  ["A-014", "跨国诈骗中心迁移导致风险外溢", "laos", "园区强迫犯罪", "旅行与招聘平台", "风险上升", "高", "2026-05-20", "执法压力下部分诈骗中心迁往治理薄弱地区，招聘链条随之转移。", ["同一中介变更目的地", "多个国家中转", "岗位说明频繁变动"], ["动态更新目的地黑名单", "核验招聘链路", "对可疑广告下架"], ["unodc-2025-inflection"], [67, 88, 84]],
  ["A-015", "假冒包裹/海关问题转接假警察", "australia", "假冒公检法/使领馆", "留学生", "高风险", "高", "2026-05-18", "诈骗从包裹异常、身份被盗用切入，再转接假中国警方施压。", ["包裹涉违禁品", "电话转接", "要求证明清白"], ["挂断", "独立查物流/官方电话", "不要共享屏幕"], ["scamwatch-chinese-authority"], [72, 90, 82]],
  ["A-016", "深伪头像用于恋爱与投资引流", "australia", "AI 深伪社工", "海外华人家庭", "风险上升", "高", "2026-05-16", "虚假身份通过深伪照片和语音增强信任，再引导投资或转账。", ["拒绝线下见面", "很快谈投资", "视频质量异常"], ["反向搜图", "拒绝代管钱包", "向亲友求证"], ["interpol-2025-scam-centres", "unodc-2025-inflection"], [66, 86, 76]],
  ["A-017", "学校社群被混入假官方联系人", "newzealand", "假冒公检法/使领馆", "学校/社团管理员", "风险上升", "中高", "2026-05-14", "骗子进入学生社群，冒充官方联系人私聊学生处理所谓涉案问题。", ["新账号私聊", "要求保密", "转到加密聊天"], ["公告官方联络方式", "建立紧急核验群", "提醒学生不单独配合"], ["nz-police-fake-kidnap", "scamwatch-chinese-authority"], [52, 80, 70]],
  ["A-018", "招聘平台出现境外高薪批量广告", "cambodia", "高薪招聘诱骗", "旅行与招聘平台", "高风险", "高", "2026-05-12", "同一模板批量发布境外高薪职位，承诺无需经验且快速赴岗。", ["薪资异常", "岗位模板重复", "要求私聊"], ["提高审核阈值", "要求资质文件", "下架疑似广告"], ["interpol-2025-scam-centres"], [74, 86, 86]],
  ["A-019", "家属收到剪辑后的求救视频", "australia", "虚拟绑架", "海外华人家庭", "高风险", "高", "2026-05-10", "骗子胁迫或诱导受害者录制片段，再剪辑成被绑架证据向家属勒索。", ["要求受害者失联", "视频不让实时对话", "限定转账时限"], ["要求实时安全词", "报警", "不要按倒计时转账"], ["scamwatch-chinese-authority"], [70, 90, 88]],
  ["A-020", "园区内部强迫参与诈骗的二次受害", "myanmar", "园区强迫犯罪", "海外华人家庭", "紧急避险", "高", "2026-05-08", "被诱骗者既可能是被拘禁受害者，也可能被迫参与诈骗活动。", ["人身被控制", "被迫完成指标", "遭威胁惩罚"], ["优先救助人身安全", "保留证据但避免冒险", "联系警方与使领馆"], ["interpol-2025-scam-centres", "unodc-2025-inflection"], [84, 94, 98]],
  ["A-021", "假冒本地警方要求银行账户调查", "australia", "假冒公检法/使领馆", "游客", "高风险", "高", "2026-05-06", "诈骗称银行账户被用于洗钱，需要配合调查并提供账户细节。", ["账户涉案", "视频做笔录", "索要验证码"], ["拒绝提供验证码", "独立联系警方", "冻结账户"], ["afp-2026-cambodia-script"], [76, 94, 84]],
  ["A-022", "冒充教育机构通知签证异常", "australia", "假冒公检法/使领馆", "留学生", "风险上升", "中高", "2026-05-04", "以学校或移民相关机构名义称签证异常，再转向假执法威胁。", ["签证异常", "需要立刻处理", "转接外部聊天软件"], ["联系学校国际学生办公室", "不要支付保证金", "保留邮件头"], ["scamwatch-chinese-authority"], [62, 82, 76]],
  ["A-023", "社媒私信招募中文客服去第三国", "philippines", "高薪招聘诱骗", "求职者", "风险上升", "中高", "2026-05-02", "招聘者绕开公开招聘流程，要求私信提交证件和行程。", ["私信招聘", "无需经验", "先交证件照片"], ["不发证件原图", "核验公司域名", "拒绝私人转账"], ["unodc-2025-inflection"], [60, 80, 76]],
  ["A-024", "离岸诈骗设备和账号批量转移", "philippines", "园区强迫犯罪", "学校/社团管理员", "风险上升", "中高", "2026-04-30", "执法查扣后，账号、设备和脚本可能快速转移到其他地点继续作案。", ["同一话术换号码", "域名频繁更换", "多国号码切换"], ["提醒社群核验官方号码", "向平台举报", "保存证据链"], ["unodc-2025-inflection"], [58, 82, 72]],
  ["A-025", "旅行中被陌生人介绍高薪兼职", "thailand", "高薪招聘诱骗", "游客", "高风险", "高", "2026-04-28", "旅行途中被同乡或陌生人介绍短期高薪兼职，随后安排车接往未知地点。", ["短期高薪", "车接车送", "不让告知亲友"], ["拒绝上车", "共享实时位置", "联系旅游警察"], ["china-thailand-2026-job"], [72, 88, 84]],
  ["A-026", "境外招聘要求缴纳保证金/培训费", "cambodia", "高薪招聘诱骗", "求职者", "高风险", "高", "2026-04-26", "以保证金、培训费、签证费为名提前收费，后续诱导出境或失联。", ["先缴费", "承诺报销", "收款人为个人"], ["不向个人账户付款", "核验劳务资质", "保留付款证据"], ["interpol-2025-scam-centres"], [70, 84, 82]],
  ["A-027", "假投资网站与社交账号配套出现", "newzealand", "投资/加密诈骗", "海外华人家庭", "风险上升", "中高", "2026-04-24", "社交账号、客服、网页和收益截图相互配合，让假平台看似完整。", ["收益稳定过高", "客服只在聊天软件", "提现先交税"], ["查监管牌照", "拒绝追加", "联系银行"], ["unodc-2025-inflection"], [56, 78, 72]],
  ["A-028", "假使领馆称护照或包裹涉案", "newzealand", "假冒公检法/使领馆", "留学生", "风险上升", "高", "2026-04-22", "来电冒充使领馆或快递，称护照、包裹、电话卡被用于犯罪。", ["自动语音", "要求回拨", "索要身份信息"], ["挂断并查官网号码", "不提供验证码", "告知家属"], ["nz-police-fake-kidnap", "scamwatch-chinese-authority"], [54, 84, 72]],
  ["A-029", "高压保密制造孤立状态", "australia", "假冒公检法/使领馆", "留学生", "高风险", "高", "2026-04-20", "骗子要求受害者不联系家人、学校、银行或警方，以便持续操控。", ["保密要求", "定时报到", "持续视频"], ["打破隔离", "找可信第三方陪同报警", "通知银行"], ["afp-2026-cambodia-script", "scamwatch-chinese-authority"], [74, 92, 88]],
  ["A-030", "跨境犯罪生态与洗钱服务外包", "cambodia", "投资/加密诈骗", "旅行与招聘平台", "高风险", "高", "2026-04-18", "诈骗、地下钱庄、数据买卖和技术服务相互支撑，单一号码或网站下架后会替换重来。", ["域名快速替换", "加密钱包转账", "多平台引流"], ["建立黑名单联动", "保留域名/钱包/账号", "分发公众预警"], ["unodc-2025-inflection", "interpol-2025-scam-centres"], [78, 90, 86]]
].map(([id, title, regionId, category, audience, level, credibility, publishedAt, summary, earlySignals, actions, sourceIds, scoreTuple]) => ({
  id,
  title,
  regionId,
  category,
  audience,
  level,
  credibility,
  publishedAt,
  status: "published",
  summary,
  earlySignals,
  actions,
  sourceIds,
  scores: { heat: scoreTuple[0], credibility: scoreTuple[1], harm: scoreTuple[2] },
  languages: ["zh-CN"],
  tags: [category, audience, getRegion(regionId)?.name || regionId]
}));

let alerts = [...seedAlerts, ...loadLocal("customAlerts", [])];
let reports = loadLocal("reports", []);

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function getRegion(id) {
  return regions.find((region) => region.id === id);
}

function getSource(id) {
  return sources.find((source) => source.id === id);
}

function score(alert) {
  const values = Object.values(alert.scores || { heat: 50, credibility: 50, harm: 50 });
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

function levelClass(level) {
  if (level === "紧急避险") return "danger";
  if (level === "高风险") return "amber";
  if (level === "风险上升") return "blue";
  return "violet";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function saveLocal(key, value) {
  localStorage.setItem(`sea-warning-${key}`, JSON.stringify(value));
}

function loadLocal(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(`sea-warning-${key}`)) || fallback;
  } catch {
    return fallback;
  }
}

function renderMetrics() {
  const published = alerts.filter((alert) => alert.status === "published");
  const highRisk = published.filter((alert) => ["高风险", "紧急避险"].includes(alert.level));
  const urgentRegions = regions.filter((region) => region.level === "紧急避险").length;
  const metrics = [
    ["已发布预警", published.length, "公开来源支撑，人工审核后发布"],
    ["高风险/紧急", highRisk.length, "首页优先展示，便于快速避险"],
    ["来源归档", sources.length, "国际组织、警方、使领馆和反诈机构"],
    ["紧急地区", urgentRegions, "需要优先避险与核验行程"]
  ];

  $("#metric-grid").innerHTML = metrics
    .map(
      ([label, value, helper]) => `
        <article class="metric-card">
          <span>${label}</span>
          <strong>${value}</strong>
          <span>${helper}</span>
        </article>
      `
    )
    .join("");
}

function renderFocusAlerts() {
  const focusAlerts = [...alerts]
    .filter((alert) => alert.status === "published")
    .sort((a, b) => score(b) - score(a))
    .slice(0, 5);

  $("#focus-alerts").innerHTML = focusAlerts.map(renderAlertItem).join("");
}

function renderAlertItem(alert) {
  const region = getRegion(alert.regionId);
  return `
    <article class="alert-item">
      <div>
        <h4>${escapeHtml(alert.title)}</h4>
        <p>${escapeHtml(alert.summary)}</p>
        <div class="meta-row">
          <span class="pill ${levelClass(alert.level)}">${alert.level}</span>
          <span class="pill">${region?.name || alert.regionId}</span>
          <span class="pill blue">${alert.category}</span>
          <span class="pill violet">${alert.audience}</span>
        </div>
      </div>
      <button class="score-badge" data-alert="${alert.id}" aria-label="查看 ${escapeHtml(alert.title)} 详情">${score(alert)}</button>
    </article>
  `;
}

function renderMap(container, large = false) {
  const width = 720;
  const height = large ? 430 : 300;
  const dots = regions
    .map((region) => {
      const fill = region.level === "紧急避险" ? "var(--vermilion)" : region.level === "高风险" ? "var(--signal)" : "var(--consular)";
      const cx = (region.x / 100) * width;
      const cy = (region.y / 100) * height;
      return `
        <g class="map-dot" data-region="${region.id}" tabindex="0" role="button" aria-label="${region.name} ${region.level}">
          <circle cx="${cx}" cy="${cy}" r="${large ? 25 : 20}" fill="${fill}"></circle>
          <circle cx="${cx}" cy="${cy}" r="${large ? 9 : 7}" fill="${fill}"></circle>
          <text class="map-label" x="${cx + 15}" y="${cy - 4}">${region.name}</text>
          <text class="map-sub" x="${cx + 15}" y="${cy + 12}">${region.level}</text>
        </g>
      `;
    })
    .join("");

  container.innerHTML = `
    <svg class="map-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="东南亚与澳新风险示意图">
      <rect x="0" y="0" width="${width}" height="${height}" rx="8" fill="#eef4f1"></rect>
      <path d="M80 ${height * 0.25} C210 ${height * 0.08}, 310 ${height * 0.22}, 415 ${height * 0.4} S610 ${height * 0.58}, 650 ${height * 0.82}" fill="none" stroke="#9fb8af" stroke-width="2" stroke-dasharray="6 8"></path>
      <path d="M335 ${height * 0.4} C420 ${height * 0.5}, 480 ${height * 0.7}, 590 ${height * 0.82}" fill="none" stroke="#c7b07d" stroke-width="2" stroke-dasharray="5 8"></path>
      <text x="24" y="34" fill="#17201d" font-size="16" font-weight="800">公开预警分布</text>
      <text x="24" y="56" fill="#5d6964" font-size="12">颜色表示等级，位置为产品化示意，不替代官方地图。</text>
      ${dots}
    </svg>
  `;
}

function renderLatestTactics() {
  $("#latest-tactics").innerHTML = alerts
    .filter((alert) => alert.status === "published")
    .slice(0, 5)
    .map(
      (alert) => `
        <button class="compact-item text-button" data-alert="${alert.id}">
          <span>${escapeHtml(alert.category)}</span>
          <strong>${escapeHtml(getRegion(alert.regionId)?.name || alert.regionId)}</strong>
        </button>
      `
    )
    .join("");
}

function renderQuickHelp() {
  $("#quick-help").innerHTML = helpContacts
    .slice(0, 4)
    .map(
      (item) => `
        <article class="quick-card">
          <strong>${escapeHtml(item.region)}</strong>
          <span>${escapeHtml(item.contact)}</span>
        </article>
      `
    )
    .join("");
}

function renderRegionList(filter = "all") {
  const list = filter === "all" ? regions : regions.filter((region) => region.level === filter || region.trend === filter);
  $("#region-list").innerHTML = list
    .map(
      (region) => `
        <article class="region-card" id="region-${region.id}">
          <header>
            <div>
              <h3>${region.name}</h3>
              <p class="muted">${region.focus}</p>
            </div>
            <span class="pill ${levelClass(region.level)}">${region.level}</span>
          </header>
          <strong>早期信号</strong>
          <ul>${region.signals.map((signal) => `<li>${escapeHtml(signal)}</li>`).join("")}</ul>
          <strong>建议动作</strong>
          <ul>${region.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ul>
          ${renderBars(region.scores)}
        </article>
      `
    )
    .join("");
}

function renderBars(scores) {
  return `
    <div class="risk-bars">
      ${[
        ["热度", scores.heat],
        ["可信度", scores.credibility],
        ["危害", scores.harm]
      ]
        .map(
          ([label, value]) => `
            <div class="risk-bar">
              <span>${label}</span>
              <span class="bar-track"><span class="bar-fill" style="width: ${value}%"></span></span>
              <strong>${value}</strong>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTacticFilters() {
  $("#tactics-filters").innerHTML = [
    `<button class="chip active" data-category="all">全部</button>`,
    ...categories.map((category) => `<button class="chip" data-category="${category}">${category}</button>`)
  ].join("");
}

function renderTactics() {
  const query = $("#tactics-search").value.trim().toLowerCase();
  const activeCategory = $(".chip.active", $("#tactics-filters"))?.dataset.category || "all";
  const visible = alerts.filter((alert) => {
    const region = getRegion(alert.regionId)?.name || "";
    const haystack = [alert.title, alert.summary, alert.category, alert.audience, region, ...alert.earlySignals].join(" ").toLowerCase();
    return alert.status === "published" && (activeCategory === "all" || alert.category === activeCategory) && haystack.includes(query);
  });

  $("#tactic-grid").innerHTML = visible.length
    ? visible
        .map(
          (alert) => `
            <article class="tactic-card">
              <div class="meta-row">
                <span class="pill ${levelClass(alert.level)}">${alert.level}</span>
                <span class="pill">${getRegion(alert.regionId)?.name || alert.regionId}</span>
              </div>
              <h3>${escapeHtml(alert.title)}</h3>
              <p>${escapeHtml(alert.summary)}</p>
              <strong>早期信号</strong>
              <ul class="signal-list">${alert.earlySignals.map((signal) => `<li>${escapeHtml(signal)}</li>`).join("")}</ul>
              <strong>应对动作</strong>
              <ul class="action-list">${alert.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ul>
              <button class="text-button" data-alert="${alert.id}">查看来源</button>
            </article>
          `
        )
        .join("")
    : `<div class="empty">没有匹配的预警。可以换一个关键词或风险类型。</div>`;
}

function renderHelp() {
  $("#help-grid").innerHTML = helpContacts
    .map(
      (item) => `
        <article class="help-card">
          <div class="meta-row">
            <span class="pill ${escapeHtml(item.priorityTone)}">${escapeHtml(item.priority)}</span>
            <span class="pill">${escapeHtml(item.region)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p class="contact">${escapeHtml(item.contact)}</p>
          <p class="muted">${escapeHtml(item.when)}</p>
        </article>
      `
    )
    .join("");
}

function renderSubscribeOptions() {
  $("#region-checkboxes").innerHTML = regions
    .map((region) => checkbox("regions", region.id, region.name))
    .join("");
  $("#audience-checkboxes").innerHTML = audiences
    .map((audience) => checkbox("audiences", audience, audience))
    .join("");

  const saved = loadLocal("subscription", null);
  if (saved) {
    saved.regions?.forEach((id) => {
      const input = $(`#region-checkboxes input[value="${id}"]`);
      if (input) input.checked = true;
    });
    saved.audiences?.forEach((value) => {
      const input = $(`#audience-checkboxes input[value="${value}"]`);
      if (input) input.checked = true;
    });
    $("#subscribe-form").frequency.value = saved.frequency || "urgent";
    $("#subscribe-form").contact.value = saved.contact || "";
  }
}

function checkbox(name, value, label) {
  return `
    <label>
      <input type="checkbox" name="${name}" value="${escapeHtml(value)}" />
      ${escapeHtml(label)}
    </label>
  `;
}

function renderReportSelects() {
  $("#report-region").innerHTML = regions.map((region) => `<option value="${region.id}">${region.name}</option>`).join("");
  $("#report-category").innerHTML = categories.map((category) => `<option>${category}</option>`).join("");
  $("#admin-region").innerHTML = $("#report-region").innerHTML;
  $("#admin-category").innerHTML = $("#report-category").innerHTML;
}

function renderAdmin() {
  renderReviewQueue();
  renderSources();
  renderWeeklyReport();
}

function renderReviewQueue() {
  const customAlerts = loadLocal("customAlerts", []);
  const queue = [
    ...reports.map((report) => ({ ...report, type: "公众报料" })),
    ...customAlerts.map((alert) => ({ ...alert, type: "人工预警" }))
  ];

  $("#review-queue").innerHTML = queue.length
    ? queue
        .slice()
        .reverse()
        .map(
          (item) => `
            <article class="review-item">
              <div class="meta-row">
                <span class="pill">${escapeHtml(item.type)}</span>
                <span class="pill ${item.status === "published" ? "blue" : "amber"}">${statusLabel(item.status)}</span>
                ${item.needsRedaction ? `<span class="pill danger">需脱敏</span>` : ""}
                ${item.reviewChecks?.length ? `<span class="pill blue">自检 ${item.reviewChecks.length}/3</span>` : ""}
              </div>
              <h4>${escapeHtml(item.title)}</h4>
              <p class="muted">${escapeHtml(item.summary)}</p>
            </article>
          `
        )
        .join("")
    : `<div class="empty">审核池暂无本地数据。</div>`;
}

function statusLabel(status) {
  return { draft: "草稿", review: "待审核", published: "已发布" }[status] || "待审核";
}

function sourceFreshness(source) {
  if (String(source.date).startsWith("访问")) {
    return { label: "访问记录", tone: "violet" };
  }

  const match = String(source.date).match(/\d{4}-\d{2}-\d{2}/);
  if (!match) return { label: "待复核", tone: "amber" };

  const versionDate = new Date(`${DATA_VERSION}T00:00:00Z`);
  const sourceDate = new Date(`${match[0]}T00:00:00Z`);
  const ageDays = Math.round((versionDate - sourceDate) / 86400000);

  if (ageDays < 0) return { label: "日期待核验", tone: "danger" };
  if (ageDays <= 365) return { label: "近一年", tone: "blue" };
  if (ageDays <= 1095) return { label: "需定期复核", tone: "amber" };
  return { label: "历史案例", tone: "violet" };
}

function renderSources() {
  $("#source-list").innerHTML = sources
    .map((source) => {
      const freshness = sourceFreshness(source);
      return `
        <article class="source-item">
          <div class="meta-row">
            <span class="pill">${escapeHtml(source.type)}</span>
            <span class="pill blue">${escapeHtml(source.credibility)}可信度</span>
            <span class="pill violet">${escapeHtml(source.date)}</span>
            <span class="pill ${freshness.tone}">${escapeHtml(freshness.label)}</span>
          </div>
          <h4>${escapeHtml(source.name)}</h4>
          <p class="muted">${escapeHtml(source.note)}</p>
          <a href="${source.url}" target="_blank" rel="noreferrer">${source.url}</a>
        </article>
      `;
    })
    .join("");
}

function renderWeeklyReport() {
  const lastSeven = alerts.filter((alert) => new Date(alert.publishedAt) >= new Date("2026-06-01"));
  const byRegion = regions
    .map((region) => {
      const count = lastSeven.filter((alert) => alert.regionId === region.id).length;
      return count ? `${region.name} ${count} 条` : null;
    })
    .filter(Boolean)
    .join("、");
  const topCategories = categories
    .map((category) => [category, lastSeven.filter((alert) => alert.category === category).length])
    .filter(([, count]) => count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([category, count]) => `${category} ${count} 条`)
    .join("、");

  $("#weekly-report").innerHTML = `
    <div class="report-line">
      <strong>本周热点地区</strong>
      <p class="muted">${byRegion || "暂无新增热点。"}</p>
    </div>
    <div class="report-line">
      <strong>新增套路类型</strong>
      <p class="muted">${topCategories || "暂无新增套路。"}</p>
    </div>
    <div class="report-line">
      <strong>编辑提醒</strong>
      <p class="muted">高风险内容只写识别信号和防护动作，不公开个人信息，不复述可操作犯罪流程。</p>
    </div>
  `;
}

function showAlert(id) {
  const alert = alerts.find((item) => item.id === id);
  if (!alert) return;
  const region = getRegion(alert.regionId);
  const dialog = $("#alert-dialog");
  $("#dialog-title").textContent = alert.title;
  $("#dialog-meta").textContent = `${region?.name || alert.regionId} · ${alert.category} · ${alert.level}`;
  $("#dialog-body").innerHTML = `
    <p>${escapeHtml(alert.summary)}</p>
    <div class="meta-row">
      <span class="pill ${levelClass(alert.level)}">${alert.level}</span>
      <span class="pill">可信度：${alert.credibility}</span>
      <span class="pill blue">对象：${alert.audience}</span>
      <span class="pill violet">发布时间：${alert.publishedAt}</span>
    </div>
    ${renderBars(alert.scores)}
    <h4>早期信号</h4>
    <ul>${alert.earlySignals.map((signal) => `<li>${escapeHtml(signal)}</li>`).join("")}</ul>
    <h4>应对动作</h4>
    <ul>${alert.actions.map((action) => `<li>${escapeHtml(action)}</li>`).join("")}</ul>
    <h4>公开来源</h4>
    <ul>
      ${alert.sourceIds
        .map((sourceId) => getSource(sourceId))
        .filter(Boolean)
        .map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${escapeHtml(source.name)}</a></li>`)
        .join("")}
    </ul>
  `;
  dialog.showModal();
}

function setupNavigation() {
  function switchView(viewId) {
    $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
    $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
    location.hash = viewId;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  $$(".nav-item").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  $$("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.jump));
  });

  const initial = location.hash.replace("#", "");
  if (initial && $(`#${initial}`)) switchView(initial);

  window.addEventListener("hashchange", () => {
    const next = location.hash.replace("#", "");
    const view = document.getElementById(next);
    if (view?.classList.contains("view")) setView(next);
  });
}

function setupEvents() {
  document.addEventListener("click", (event) => {
    const alertButton = event.target.closest("[data-alert]");
    if (alertButton) showAlert(alertButton.dataset.alert);

    const regionDot = event.target.closest("[data-region]");
    if (regionDot) {
      setView("map");
      setTimeout(() => $(`#region-${regionDot.dataset.region}`)?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    }
  });

  $(".app-nav").addEventListener("click", (event) => {
    if (!event.target.matches(".nav-item")) return;
  });

  $("#dialog-close").addEventListener("click", () => $("#alert-dialog").close());

  $$("#map .chip").forEach((button) => {
    button.addEventListener("click", () => {
      $$("#map .chip").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderRegionList(button.dataset.mapFilter);
    });
  });

  $("#tactics-filters").addEventListener("click", (event) => {
    if (!event.target.matches(".chip")) return;
    $$("#tactics-filters .chip").forEach((button) => button.classList.remove("active"));
    event.target.classList.add("active");
    renderTactics();
  });

  $("#tactics-search").addEventListener("input", renderTactics);

  $("#subscribe-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subscription = {
      regions: data.getAll("regions"),
      audiences: data.getAll("audiences"),
      frequency: data.get("frequency"),
      contact: data.get("contact")
    };
    saveLocal("subscription", subscription);
    $("#subscribe-status").textContent = "已保存到本机浏览器。后续接入推送时可沿用这组偏好。";
  });

  $("#report-form").summary.addEventListener("input", (event) => {
    const needsRedaction = detectPii(event.target.value);
    $("#privacy-tip").textContent = needsRedaction
      ? "检测到可能的手机号、邮箱、证件或住址信息。提交前建议先打码。"
      : "暂未检测到明显个人敏感信息。仍建议只保留必要事实。";
  });

  $("#report-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const report = {
      id: `R-${Date.now()}`,
      title: data.get("title"),
      regionId: data.get("region"),
      category: data.get("category"),
      summary: data.get("summary"),
      status: "review",
      createdAt: new Date().toISOString(),
      reviewChecks: data.getAll("precheck"),
      needsRedaction: detectPii(data.get("summary"))
    };
    reports.push(report);
    saveLocal("reports", reports);
    form.reset();
    $("#report-status").textContent = "已进入本地审核池，默认不会公开。";
    $("#privacy-tip").textContent = "输入摘要后，这里会提示是否可能包含个人信息。";
    renderReviewQueue();
  });

  $("#admin-alert-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const alert = {
      id: `C-${Date.now()}`,
      title: data.get("title"),
      regionId: data.get("region"),
      category: data.get("category"),
      audience: "公众",
      level: data.get("level"),
      credibility: "待核验",
      publishedAt: new Date().toISOString().slice(0, 10),
      status: data.get("status"),
      summary: data.get("summary"),
      earlySignals: ["人工录入，待编辑补充"],
      actions: ["人工审核后再发布"],
      sourceIds: [],
      scores: { heat: 45, credibility: 35, harm: data.get("level") === "紧急避险" ? 90 : 60 },
      languages: String(data.get("languages") || "zh-CN").split(",").map((item) => item.trim()).filter(Boolean),
      tags: [data.get("category"), getRegion(data.get("region"))?.name || data.get("region")],
      needsRedaction: detectPii(data.get("summary"))
    };
    const customAlerts = loadLocal("customAlerts", []);
    customAlerts.push(alert);
    saveLocal("customAlerts", customAlerts);
    alerts.push(alert);
    form.reset();
    renderAll();
  });

  $("#clear-local").addEventListener("click", () => {
    localStorage.removeItem("sea-warning-customAlerts");
    localStorage.removeItem("sea-warning-reports");
    localStorage.removeItem("sea-warning-subscription");
    reports = [];
    alerts = [...seedAlerts];
    renderAll();
  });
}

function setView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.view === viewId));
  location.hash = viewId;
}

function detectPii(text) {
  const patterns = [
    /\b1[3-9]\d{9}\b/,
    /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i,
    /\b\d{15,18}[\dXx]?\b/,
    /(护照|身份证|住址|银行卡|微信号|passport|address|bank card)/i
  ];
  return patterns.some((pattern) => pattern.test(text));
}

function renderAll() {
  $("#last-updated").textContent = `数据版本：${DATA_VERSION} · MVP 原型`;
  renderMetrics();
  renderFocusAlerts();
  renderMap($("#region-visual"));
  renderMap($("#large-map"), true);
  renderLatestTactics();
  renderQuickHelp();
  renderRegionList();
  renderTacticFilters();
  renderTactics();
  renderHelp();
  renderSubscribeOptions();
  renderReportSelects();
  renderAdmin();
}

renderAll();
setupNavigation();
setupEvents();
