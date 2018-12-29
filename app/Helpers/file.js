const fs = use('fs');

class FileHelper {
  static exists(path) {
    try {
      fs.accessSync(path);
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = FileHelper;
