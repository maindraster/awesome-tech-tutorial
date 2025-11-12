---
title: Linux 常用命令
lastUpdated: 2024-10-28
---

## 文件管理

### cd：切换目录

```cmd
cd - # 返回进入此目录之前所在的目录
cd ~ # 切换到用户主目录
```
### pwd：显示当前目录

```cmd
pwd # 显示当前目录的完整路径
```

### mkdir：创建目录

```cmd
mkdir directory_name # 创建名为 directory_name 的目录
```

### rmdir：删除目录

```cmd
rmdir directory_name # 删除名为 directory_name 的目录
```

### ls：列出目录内容

```cmd
ls # 列出当前目录内容
ls -a # 列出所有文件，包括隐藏文件
ls -l # 列出详细信息，包括文件夹总kb数、文件权限、所有者、大小、修改日期等
ls -R # 递归列出所有目录内容
```

### cp：复制文件或目录

```cmd
cp source destination # 将 source 复制到 destination
cp -r source destination # 将 source 目录及其内容复制到 destination 目录
```

### rm：删除文件或目录

```cmd
rm file_name # 删除名为 file_name 的文件
rm -r directory_name # 删除名为 directory_name 的目录及其内容
```

### mv：移动文件或目录

```cmd
mv source destination # 将 source 移动到 destination
```

### tar：打包和压缩文件

```cmd
tar -cvf archive_name.tar source_file # 打包 source_file 到 archive_name.tar
tar -xvf archive_name.tar # 解压 archive_name.tar
```

## 文件检索

### cat：查看文件内容

```cmd
cat file_name # 查看名为 file_name 的文件内容
```

### more：分页查看文件内容

```cmd
more file_name # 分页查看名为 file_name 的文件内容
```

### less：分页查看文件内容

```cmd
less file_name # 分页查看名为 file_name 的文件内容
```

### head：查看文件开头内容

```cmd
head -n number file_name # 查看名为 file_name 的文件开头 number 行内容
```

### tail：查看文件末尾内容

```cmd
tail -n number file_name # 查看名为 file_name 的文件末尾 number 行内容
```
### file：查看文件类型

```cmd
file file_name # 查看名为 file_name 的文件类型
```

### find：搜索文件

find 后面的文件名称并非采用正则表达式，而是用`*`来替代0-多个字符，例如我只记得那个文件夹叫…te…pl…(更常用的是类似`*.[ch]`找后缀为`.c`或`.h`的文件)。
```cmd 
find /home/tky -name "*te*pl*"
```
但是 find 可能把一大堆子目录也列举出来了，我大概知道这个目录层级不超过2，那么我可以用`-maxdepth`。
```cmd
find /home/tky -maxdepth 2 -name "*te*pl*"
```
但是我发现目录里面还有好多文件，我只想要目录，那么可以用`-type d`（如果想找文件可以用`-type f`）。这下只有一个目录了，那直接打开它吧。
```cmd 
cd $(find /home/tky -maxdepth 2 -type d -name "*te*pl*") 
```
:::tip[一些东西]
- 访问时间（-atime/天，-amin/分钟）：用户最近一次访问时间。
- 修改时间（-mtime/天，-mmin/分钟）：文件最后一次修改时间
- 变化时间（-ctime/天，-cmin/分钟）：文件数据元（例如权限等）最后一次修改时间。
```cmd
find /home/tky -mtime -1 # 列出1天内修改的文件
find /home/tky -atime +1 # 列出超过1天内访问的文件 
```
```cmd
-size +10k：查找大于10KB的文件
-size -10M：查找小于10MB的文件
```
:::


## 输入输出控制

### 重定向：将命令的输出重定向到文件

```cmd
command > file_name # 将 command 的输出重定向到名为 file_name 的文件
command >> file_name # 将 command 的输出追加到名为 file_name 的文件
```

### 管道：将命令的输出作为另一个命令的输入

```cmd
command1 | command2 # 将 command1 的输出作为 command2 的输入
```

### tee：将命令的输出同时重定向到文件和屏幕

```cmd
command | tee file_name # 将 command 的输出同时重定向到名为 file_name 的文件和屏幕
```

### xargs：将命令的输出作为命令的参数

```cmd
xargs command # 将命令的输出作为 command 的参数
```

## 文本处理

### vim：编辑文件

```cmd
vim file_name # 编辑名为 file_name 的文件
```

### grep：搜索文本

```cmd
grep pattern file_name # 在名为 file_name 的文件中搜索 pattern
```

### awk：文本分析

```cmd
awk script file_name # 使用 script 对名为 file_name 的文件进行分析
```

### sed：文本替换

```cmd
sed's/old_text/new_text/g' file_name # 在名为 file_name 的文件中搜索 old_text 并替换为 new_text
```

### sort：排序文本

```cmd
sort file_name # 对名为 file_name 的文件进行排序
```

### wc：统计文本行数、字数、字节数

```cmd
wc file_name # 统计名为 file_name 的文件行数、字数、字节数
```

### uniq：删除重复行

```cmd
uniq file_name # 删除名为 file_name 的文件中重复的行
```

### cut：提取文本字段

```cmd
cut -d delimiter -f field_number file_name # 提取名为 file_name 的文件中以 delimiter 分隔的第 field_number 列内容
```

### tr：字符转换

```cmd
tr 'old_char' 'new_char' file_name # 在名为 file_name 的文件中搜索 old_char 并替换为 new_char
```

## 正则表达式

```cmd
grep -E pattern file_name # 在名为 file_name 的文件中使用正则表达式搜索 pattern
```

## 系统监控

### jobs：显示当前任务

```cmd
jobs # 显示当前任务
```

### ps：显示进程信息

```cmd
ps -ef # 显示所有进程信息
```

### top：实时显示系统信息

```cmd
top # 实时显示系统信息
```

### kill：终止进程

```cmd
kill -9 process_id # 终止进程 process_id
```

### free：显示内存使用情况

```cmd
free # 显示内存使用情况
```

### dmesg：显示系统日志

```cmd
dmesg # 显示系统日志
```

### lsof：显示打开的文件信息

```cmd
lsof # 显示打开的文件信息
```

## 其他命令

- chmod：修改文件权限
- chown：修改文件所有者
- chgrp：修改文件群组
- ln：创建链接
- uname：显示系统信息
- df：显示磁盘使用情况
- du：显示目录或文件大小
- mount：挂载磁盘
- umount：卸载磁盘
- ping：测试网络连接
- ssh：远程登录
- scp：远程复制文件
- ssh-keygen：生成 SSH 密钥

