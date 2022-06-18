import { AngleDown } from "../icons/angleDown"
import { AngleUp } from "../icons/angleUp"
import { AngleLeft } from "../icons/angleLeft"
import { ArrowRight } from "../icons/arrowRight"
import { ArrowUp } from "../icons/arrowUp"
import { CheckCircle } from "../icons/checkCircle"
import { Clock } from "../icons/clock"
import { Cross } from "../icons/cross"
import { Grip } from "../icons/grip"
import { Home } from "../icons/home"
import { PauseCircle } from "../icons/pauseCircle"
import { Play } from "../icons/play"
import { PlusCircle } from "../icons/plusCircle"
import { Reports } from "../icons/reports"
import { Settings } from "../icons/settings"
import { Tag } from "../icons/tag"
import { Tasks } from "../icons/tasks"
import { Trash } from "../icons/trash"
import { User } from "../icons/user"

export const mapIcon = (icon, color, size, props) => {
  switch (icon) {
    case "angle-down":
      return <AngleDown {...props} fill={color} height={size} width={size} />
    case "angle-up":
      return <AngleUp {...props} fill={color} height={size} width={size} />
    case "angle-left":
      return <AngleLeft {...props} fill={color} height={size} width={size} />
    case "arrow-right":
      return <ArrowRight {...props} fill={color} height={size} width={size} />
    case "arrow-up":
      return <ArrowUp {...props} fill={color} height={size} width={size} />
    case "check-circle":
      return <CheckCircle {...props} fill={color} height={size} width={size} />
    case "clock":
      return <Clock {...props} fill={color} height={size} width={size} />
    case "cross":
      return <Cross {...props} fill={color} height={size} width={size} />
    case "grip":
      return <Grip {...props} fill={color} height={size} width={size} />
    case "home":
      return <Home {...props} fill={color} height={size} width={size} />
    case "pause-circle":
      return <PauseCircle {...props} fill={color} height={size} width={size} />
    case "play":
      return <Play {...props} fill={color} height={size} width={size} />
    case "plus-circle":
      return <PlusCircle {...props} fill={color} height={size} width={size} />
    case "reports":
      return <Reports {...props} fill={color} height={size} width={size} />
    case "settings":
      return <Settings {...props} fill={color} height={size} width={size} />
    case "tag":
      return <Tag {...props} fill={color} height={size} width={size} />
    case "tasks":
      return <Tasks {...props} fill={color} height={size} width={size} />
    case "trash":
      return <Trash {...props} fill={color} height={size} width={size} />
    case "user":
      return <User {...props} fill={color} height={size} width={size} />

    default:
      return <span>no icon</span>
  }
}
